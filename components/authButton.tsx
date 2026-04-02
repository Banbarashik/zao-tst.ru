"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { AuthModal } from "@/components/authModal";
import { Button } from "@/components/ui/button";

export function AuthButton() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      {session ? (
        <Button variant="outline" onClick={() => signOut()}>
          Sign out
        </Button>
      ) : (
        <Button onClick={() => setOpen(true)}>Sign in</Button>
      )}
      <AuthModal open={open} onOpenChange={setOpen} />
    </>
  );
}
