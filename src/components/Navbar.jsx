import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { PHONE_HREF } from "../data";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-200">
        <span className="text-white font-display font-bold text-lg">GS</span>
      </span>
      <span className="font-display font-bold text-lg sm:text-xl text-slate-900">
        Galaxy <span className="gradient-text">Service</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <Logo />

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-indigo-600 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PHONE_HREF}
          className="hidden lg:inline-flex items-center gap-2 gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-indigo-200 transition-transform hover:scale-105"
        >
          <Phone size={16} />
          Contact Us
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <ul className="flex flex-col px-5 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 px-2 rounded-lg text-slate-700 font-medium hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 gradient-btn text-white text-sm font-semibold px-5 py-3 rounded-full"
                >
                  <Phone size={16} />
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
