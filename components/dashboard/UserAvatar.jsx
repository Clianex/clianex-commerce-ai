"use client";

import { UserButton } from "@clerk/nextjs";

export default function UserAvatar({ collapsed }) {
  return (
    <div
      className={`flex items-center gap-3 ${
        collapsed ? "justify-center" : ""
      }`}
    >
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-9 h-9",
          },
        }}
      />

      {!collapsed && (
        <span className="text-sm font-medium text-slate-700">
          Mi cuenta
        </span>
      )}
    </div>
  );
}
