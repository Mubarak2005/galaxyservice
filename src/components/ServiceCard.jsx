import { motion } from "framer-motion";
import {
  Phone,
  Snowflake,
  Refrigerator,
  WashingMachine,
  Microwave,
} from "lucide-react";
import { PHONE_HREF } from "../data";

const ICONS = {
  ac: Snowflake,
  fridge: Refrigerator,
  "washing-machine": WashingMachine,
  microwave: Microwave,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICONS[service.id] || Snowflake;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group flex flex-col justify-between rounded-3xl border border-slate-100 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 sm:p-4 sm:p-5 shadow-sm hover:shadow-xl hover:shadow-indigo-100 ring-1 ring-transparent ${service.ring} transition-all duration-300`}
    >
      <div
        className={`relative rounded-2xl overflow-hidden aspect-[4/3] p-2 mb-5 bg-gray-50 `}
      >
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full ${service.id == "fridge" || service.id == "geyser" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
        />
      </div>

      <div className="pt-3 text-center">
        <h3 className="font-display font-semibold text-lg text-slate-900 mb-1.5">
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 mb-4 min-h-[40px]">
          {service.description}
        </p>
        <p className="text-sm text-slate-600 mb-5">
          Starting at{" "}
          <span className="font-bold gradient-text">₹{service.price}</span>
        </p>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 w-full rounded-full border-2 border-indigo-500 text-indigo-600 font-semibold px-5 py-2.5 text-sm transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent"
        >
          <Phone size={15} />
          Call Now
        </a>
      </div>
    </motion.div>
  );
}
