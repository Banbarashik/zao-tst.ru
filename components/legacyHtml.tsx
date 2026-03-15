"use client";

import { useEffect, useRef } from "react";

export default function LegacyHtml({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scripts = containerRef.current?.querySelectorAll("script") ?? [];

    scripts.forEach((script) => {
      const newScript = document.createElement("script");

      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      newScript.textContent = script.textContent;

      script.parentNode?.replaceChild(newScript, script);
    });
  }, [html]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: html }}
      className={`legacy-html ${className}`}
    />
  );
}
