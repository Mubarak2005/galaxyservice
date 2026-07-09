import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { serviceAreas } from "../data";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-gradient-to-b from-indigo-50/60 to-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="section-eyebrow justify-center">Service Area</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-3">
            Where we work
          </h2>
          <p className="text-slate-500 mt-3">
            We currently provide appliance repair services across Vadodara.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] lg:aspect-auto lg:h-[420px]"
          >
            <iframe
              title="Galaxy Service - Vadodara Service Area Map"
              src="https://www.google.com/maps?q=Vadodara,Gujarat&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                <MapPin size={20} className="text-white" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-slate-900">Vadodara, Gujarat</h3>
                <p className="text-sm text-slate-500">Currently our only service city</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Our technicians are strategically located across Vadodara for the fastest
              possible doorstep response, covering all major residential and commercial areas.
            </p>

            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-indigo-100 text-indigo-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
