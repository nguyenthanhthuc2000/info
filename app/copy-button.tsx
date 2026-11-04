"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard có thể bị chặn; bỏ qua
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-md border border-white/10 px-2 py-1 text-xs font-medium text-stone-300 transition hover:border-amber-400/60 hover:text-amber-300"
    >
      {copied ? "Đã copy" : "Copy"}
    </button>
  );
}
