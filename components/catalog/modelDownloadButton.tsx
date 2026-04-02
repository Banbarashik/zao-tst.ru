"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import useYandexMetrika from "@/hooks/useYandexMetrika";
import { AuthModal } from "@/components/authModal";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export function ModelDownloadButton({
  modelLinks,
}: {
  modelLinks: {
    text: string;
    path: string;
  }[];
}) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const { reachGoal } = useYandexMetrika();

  async function handleDownload(path: string) {
    const res = await fetch(`/api/models/${path}`);
    if (!res.ok) return;
    const blob = await res.blob();
    const filename = path.split("/").at(-1) ?? "model.zip";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
    reachGoal("model_download");
  }

  function handleLinkClick(path: string) {
    setIsOpen(false);
    if (session) {
      handleDownload(path);
    } else {
      setPendingUrl(path);
      setAuthOpen(true);
    }
  }

  function handleAuthSuccess() {
    if (pendingUrl) {
      handleDownload(pendingUrl);
      setPendingUrl(null);
    }
  }

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="unstyled"
            className="bg-accent w-40 rounded-md px-3 py-2 text-sm font-semibold"
          >
            Скачать 3D-модель
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={10}
          className="w-40 rounded-sm p-0"
        >
          <ol className="outline-accent overflow-hidden rounded-sm outline">
            {modelLinks.map((ml) => (
              <li key={ml.text}>
                <button
                  className="hover:text-primary-darker block w-full py-1.75 text-center hover:bg-gray-100"
                  onClick={() => handleLinkClick(ml.path)}
                >
                  {ml.text}
                </button>
              </li>
            ))}
          </ol>
        </PopoverContent>
      </Popover>

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}
