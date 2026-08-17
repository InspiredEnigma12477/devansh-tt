"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy-950/95 backdrop-blur shadow-lg shadow-navy-950/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="#home" className="text-lg font-bold tracking-tight text-white">
          Devansh Tours <span className="text-amber-400">&amp; Travel</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-medium text-white/85 transition-colors hover:text-amber-400">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-colors hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-amber-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      ) : null}
    </header>
  );
}
