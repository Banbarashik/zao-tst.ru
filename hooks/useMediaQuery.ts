import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const frame = window.requestAnimationFrame(() => setMatches(media.matches));
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
