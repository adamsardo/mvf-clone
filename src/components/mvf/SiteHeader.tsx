"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/mvf-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-mvf-navy/82 text-white backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center">
        <Link
          href="/"
          className="flex h-full shrink-0 items-center px-6 text-[15px] font-medium uppercase md:px-10 lg:px-20"
        >
          Moonee Valley Foundation
        </Link>
        <nav className="ml-auto hidden h-full items-center lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-full items-center px-4 text-[13px] font-bold transition-colors hover:bg-white/10 ${
                  active ? "text-white" : "text-white/85"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/support-us#donate"
          className="ml-auto hidden h-full items-center bg-mvf-purple px-8 text-xl font-medium transition-colors hover:bg-mvf-purple-dark lg:flex"
        >
          Donate
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto flex h-full w-16 items-center justify-center bg-mvf-purple transition-colors hover:bg-mvf-purple-dark lg:hidden"
        >
          {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-white/10 bg-mvf-navy lg:hidden">
          <div className="grid">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 px-6 py-4 text-sm font-bold text-white/90"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/support-us#donate"
              onClick={() => setOpen(false)}
              className="bg-mvf-purple px-6 py-4 text-sm font-bold text-white"
            >
              Donate
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
