import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Home as HomeIcon,
  Receipt,
  PackageCheck,
  Headset,
} from "lucide-react";
import { whyChooseUs } from "../data";

const ICONS = [Zap, ShieldCheck, HomeIcon, Receipt, PackageCheck, Headset];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl mx-auto mb-14"
      >
        <span className="section-eyebrow justify-center">Why Choose Us</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-3">
          Service that puts you first
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseUs.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-6 bg-gradient-to-br ${item.gradient} border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm mb-5">
                <Icon size={22} className={item.iconColor} />
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
