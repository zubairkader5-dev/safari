"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { contact, nav } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const onScroll = () => setSolid(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return (
    <>
      <div className="utility-bar"><div className="shell utility-bar__inner"><span>{contact.tagline}</span><div className="utility-links"><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></div></div>
      <header className={`site-header ${solid ? "site-header--solid" : ""} ${open ? "site-header--menu-open" : ""}`}>
        <div className="shell header-inner">
          <Logo inverse className="header-logo" />
          <nav className={`desktop-nav ${open ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">
            {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link className="button button--yellow nav-cta" href="/contact" onClick={() => setOpen(false)}>Plan Your Safari <span>↗</span></Link>
          </nav>
          <button className="menu-toggle menu-toggle--inverse" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /></button>
        </div>
      </header>
    </>
  );
}
