"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function UserMenu() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return null;

  return (
    <div className="flex items-center gap-3">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
