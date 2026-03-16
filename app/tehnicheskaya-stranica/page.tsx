"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TehnicheskayaStranica() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 0) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="mx-auto max-w-4xl p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Поиск…"
          className="flex-1"
        />
        <Button type="submit">Найти</Button>
      </form>
    </main>
  );
}
