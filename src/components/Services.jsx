import { motion } from "framer-motion";
import { services } from "../data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl mx-auto mb-14"
      >
        <span className="section-eyebrow justify-center">Our Services</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-3">
          How can we help you?
        </h2>
        <p className="text-slate-500 mt-3">
          Reliable repair for the appliances you rely on most — booked with a single call.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
