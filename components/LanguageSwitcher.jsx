"use client";

import { useRouter, usePathname } from "next/navigation";

const LANGS = ["es", "en", "fr", "de"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang) => {
    router.replace(`/${lang}${pathname.replace(/^\/(es|en|fr|de)/, "")}`);
  };

  return (
    <select
      onChange={(e) => changeLang(e.target.value)}
      className="border rounded-lg text-sm px-2 py-1"
    >
      {LANGS.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
