"use client";

import searchIndex from "@/public/search-index.json";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MiniSearch from "minisearch";

import { highlight, filterTermsForSnippet } from "@/helpers/highlight";
import { makeSnippet } from "@/lib/snippet";

import { Input } from "@/components/ui/input";

type Doc = { title: string; url: string; content: string };

export default function SearchResults({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const [docs, setDocs] = useState<Doc[] | null>(null);
  const [q, setQ] = useState(initialQuery);
  const [results, setResults] = useState<[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const abortControllerRef = useRef<AbortController | null>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;

    const unique = Array.from(
      new Map(searchIndex.map((d) => [d.url, d])).values(),
    );
    setDocs(unique);
  }, []);

  const docsMap = useMemo(() => {
    const m = new Map<string, Doc>();
    (docs ?? []).forEach((d) => m.set(d.url, d));
    return m;
  }, [docs]);

  const miniSearch = useMemo(() => {
    if (!docs) return null;
    const ms = new MiniSearch<Doc>({
      idField: "url",
      fields: ["title", "content"],
      storeFields: ["title", "url"],
      searchOptions: {
        boost: { title: 6, content: 1 },
        prefix: true,
        fuzzy: 0.4,
        combineWith: "AND",
      },
      tokenize: (s) => s.toLowerCase().match(/[a-zа-яё0-9]+/gi) || [],
    });
    ms.addAll(docs);
    return ms;
  }, [docs]);

  const performSearch = useCallback(
    async (query: string, signal: AbortSignal) => {
      if (!miniSearch || !query) {
        setResults([]);
        return;
      }

      setIsSearching(true);

      // Defer computation to next idle time (off main thread)
      await new Promise((resolve) => {
        if ("scheduler" in window && "yield" in window.scheduler) {
          // Use scheduler.yield if available (Chrome 123+)
          window.scheduler.yield().then(resolve);
        } else {
          // Fallback: use requestIdleCallback or setTimeout
          requestIdleCallback(() => resolve(null), { timeout: 50 });
        }
      });

      if (signal.aborted) return;

      const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const supportsUnicodeProps = (() => {
        try {
          new RegExp("\\p{L}", "u");
          return true;
        } catch {
          return false;
        }
      })();

      const raw = miniSearch.search(query);
      const qNorm = query.toLowerCase().replace(/\s+/g, " ").trim();

      const boosted = raw
        .map((r) => {
          if (signal.aborted) throw new Error("Search cancelled");

          const doc = docsMap.get(r.id);
          const title = (doc?.title || "").toLowerCase();
          const content = (doc?.content || "").toLowerCase();

          const terms =
            r.terms && r.terms.length ? r.terms : query.split(/\s+/);

          let score = r.score ?? 0;
          if (qNorm && (title.includes(qNorm) || content.includes(qNorm))) {
            score += 2000;
          }

          for (const term of terms) {
            if (!term) continue;
            const t = String(term).toLowerCase();
            const e = esc(t);

            const re = supportsUnicodeProps
              ? new RegExp(`(?<![\\p{L}\\p{N}])${e}(?![\\p{L}\\p{N}])`, "iu")
              : new RegExp(`(^|[^A-Za-z0-9])${e}([^A-Za-z0-9]|$)`, "i");

            if (re.test(title)) score += 100;
            if (re.test(content)) score += 40;
          }

          return { ...r, score, _doc: doc };
        })
        .sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

      if (!signal.aborted) {
        setResults(boosted);
      }

      setIsSearching(false);
    },
    [miniSearch, docsMap],
  );

  useEffect(() => {
    // Cancel previous search
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    // Clear debounce timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Debounce: wait 300ms before searching
    debounceTimeoutRef.current = setTimeout(() => {
      performSearch(q, abortControllerRef.current!.signal);
    }, 300);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [q, performSearch]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (!v) return;
    router.replace(`/search?q=${encodeURIComponent(v)}`);
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-4">
      <form onSubmit={onSubmit}>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск…"
        />
      </form>

      {isSearching && <p className="text-sm text-gray-500">Поиск…</p>}

      <ul className="space-y-6">
        {results.slice(0, 10).map((r) => {
          const termsTitle = r.terms || [];
          const termsBody = filterTermsForSnippet(termsTitle);

          const doc = docsMap.get(r.id);
          if (!doc) return null;

          const titleHtml = highlight(doc.title, termsTitle);
          const snippetHtml = makeSnippet(doc.content, termsBody, {
            minCtx: 80,
            maxLen: 720,
          });

          return (
            <li key={r.id} className="flex flex-col">
              <Link
                href={doc.url}
                className="text-primary-darker hover:text-primary-dark mb-1.5 text-[15px]"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />
              {snippetHtml && (
                <p
                  className="pb-6 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: snippetHtml }}
                />
              )}
              <span className="h-px w-full bg-gray-300"></span>
            </li>
          );
        })}
        {!results.length && q && !isSearching && (
          <li className="text-sm text-gray-500">Ничего не найдено</li>
        )}
      </ul>
    </div>
  );
}
