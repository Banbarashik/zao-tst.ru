"use client";

import searchIndex from "@/data/general-pages-search-index.json";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { Search } from "lucide-react";

interface SearchItem {
  title: string;
  url: string;
  img: string;
}

export default function NavSearch({ className = "" }) {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Load/compute search results
  useEffect(() => {
    if (!searchInput) {
      setSearchResults([]);
      return;
    }
    const results = (searchIndex as SearchItem[]).filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchInput]);

  // Hide results when clicking/tapping outside the search area
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!wrapperRef.current) return;
      // if click is outside the whole search wrapper, clear results
      if (target && !wrapperRef.current.contains(target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const handleResetSearch = () => {
    setSearchInput("");
    setSearchResults([]);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = searchInput.trim();
      if (q.length > 0) {
        router.push(`/search?q=${encodeURIComponent(q)}`);
        handleResetSearch();
      }
    }
  };

  return (
    <div ref={wrapperRef} className={cn("relative max-w-md", className)}>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Поиск по сайту..."
        className="border-accent/10 focus:ring-accent/50 w-full rounded-lg border bg-white/10 px-4 py-2.5 pl-10 text-sm text-white placeholder-white/60 outline-none focus:ring"
      />
      <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-white/60" />

      {searchResults.length > 0 && (
        <ul
          className="absolute right-0 left-0 z-50 mt-0 border-t bg-white shadow-sm outline outline-[#A5A5A5]"
          style={{
            top: "100%", // place immediately under the input row
            padding: "8px 6px",
          }}
        >
          {searchResults.slice(0, 10).map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                onClick={handleResetSearch}
                className="flex items-center gap-2 rounded p-2 hover:bg-gray-200"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <span className="text-sm text-gray-900">{item.title}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`/search?q=${searchInput}`}
              onClick={handleResetSearch}
              className="flex items-center gap-2 rounded p-2 text-gray-900 hover:bg-gray-200"
            >
              Все результаты
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
