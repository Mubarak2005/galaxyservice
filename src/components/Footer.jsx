import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER, serviceAreas } from "../data";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
];

const SERVICES = [
  "AC Service & Repair",
  "Fridge Repair",
  "Washing Machine Repair",
  "Microwave / Oven Repair",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                <span className="text-white font-display font-bold text-lg">GS</span>
              </span>
              <span className="font-display font-bold text-lg text-white">
                Galaxy <span className="gradient-text">Service</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Fast, reliable and affordable home appliance repair services at your doorstep,
              proudly serving Vadodara.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s} className="hover:text-white transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm mb-5">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-indigo-400 shrink-0" />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-indigo-400 shrink-0" />
                <span>galaxyservicevadodara@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                <span>Serving all areas of Vadodara, Gujarat</span>
              </li>
            </ul>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-transform hover:scale-105"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Galaxy Service. All rights reserved.</p>
          <p>Made with care for Vadodara homes.</p>
        </div>
      </div>
    </footer>
  );
}
