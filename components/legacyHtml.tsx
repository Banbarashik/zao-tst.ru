"use client";

import { useEffect, useRef, useState } from "react";

export default function LegacyHtml({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  if (!path.startsWith("/legacy/")) {
    console.error("Invalid legacy HTML path");
    return;
  }

  const [html, setHtml] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setHtml(text));
  }, [path]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scripts = containerRef.current?.querySelectorAll("script") ?? [];

    scripts.forEach((script) => {
      const newScript = document.createElement("script");

      // копируем атрибуты
      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      newScript.textContent = script.textContent;

      // заменяем старый script
      script.parentNode?.replaceChild(newScript, script);
    });
  }, [html]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: html }}
      className={className}
    />
  );
}
