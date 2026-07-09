import { motion } from "framer-motion";
import { Award, Clock3, Wallet } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "Expert Technicians",
    description:
      "Certified professionals with years of hands-on repair experience.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Clock3,
    title: "Same Day Service",
    description: "Most repairs completed on the very same day you call us.",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Honest, upfront pricing with zero hidden charges.",
    gradient: "from-cyan-500 to-teal-500",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">About Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-3 mb-5 leading-tight">
              Trusted Home Appliance Repair in{" "}
              <span className="gradient-text">Vadodara</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              Galaxy Service provides reliable AC, refrigerator, washing
              machine, microwave, and geyser repair services in Vadodara. We
              offer same-day doorstep service, experienced technicians, genuine
              spare parts, and affordable pricing.
            </p>

            <p className="text-slate-500 leading-relaxed">
              From minor repairs to complete installations, our experts ensure
              fast, professional service with a focus on quality and customer
              satisfaction.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <li>✓ Same-Day Doorstep Service</li>
              <li>✓ AC Repair in Vadodara</li>
              <li>✓ Refrigerator Repair</li>
              <li>✓ Washing Machine Repair</li>
              <li>✓ Microwave & Oven Repair</li>
              <li>✓ Geyser Repair & Installation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5"
          >
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
                >
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
