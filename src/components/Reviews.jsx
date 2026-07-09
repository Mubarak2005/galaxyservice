import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-white to-indigo-50/50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="section-eyebrow justify-center">Customer Reviews</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-3">
            Loved by Vadodara Homes
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col justify-between bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl p-6 transition-all duration-300"
            >
              <Quote size={30} className="text-indigo-100 mb-3" fill="currentColor" />

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={15}
                    className={idx < r.rating ? "text-amber-400" : "text-slate-200"}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">"{r.review}"</p>

              <div className="relative bottom-0 left-0 flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-display font-semibold text-sm shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{r.name}</p>
                  <p className="text-xs text-slate-400 truncate">{r.area}</p>
                </div>
              </div>

              <span className="absolute top-6 right-6 text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                {r.service}
              </span>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-5"
        >
          
          <div className="font-display text-md text-slate-100 text-end">
            <span className="py-2 px-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">See more reviews on Justdial</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
