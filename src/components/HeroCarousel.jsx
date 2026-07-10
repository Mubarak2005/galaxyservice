import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Zap, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { heroSlides, PHONE_HREF } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <section
      id="home"
      className=" max-w-7xl mx-auto mt-12 md:mt-24 px-4 sm:px-6 pt-6 overflow-visible"
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          className="hero-swiper rounded-3xl md:rounded-[2.5rem] overflow-hidden"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`relative bg-gradient-to-br ${slide.bg} rounded-3xl pl-6 sm:pl-15 py-14 sm:py-20 overflow-hidden`}
              >
                {/* decorative blur circle */}
                <div className="absolute -right-50 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 hidden sm:block" />

                <div className="relative grid sm:grid-cols-2 items-center gap-10">
                  <motion.div
                    key={slide.id + "-text"}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <span className="section-eyebrow-badge inline-flex items-center gap-1.5 bg-white/70 text-indigo-700 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm mb-5">
                      <Zap
                        size={13}
                        className="fill-indigo-600 text-indigo-600"
                      />
                      {slide.badge}
                    </span>

                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.1] text-slate-900 mb-5">
                      {slide.heading}{" "}
                      <span className="gradient-text block sm:inline">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg max-w-md mb-8">
                      {slide.description}
                    </p>

                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 gradient-btn text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-indigo-200 transition-transform hover:scale-105"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                  </motion.div>

                  <motion.div
                    key={slide.id + "-img"}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative"
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full max-w-2xl mx-auto rounded-3xl object-contain overflow-visible aspect-[4/3]"
                    />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav arrows */}
        <button
          aria-label="Previous slide"
          className="hero-prev cursor-pointer absolute left-3 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:scale-105 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next slide"
          className="hero-next cursor-pointer absolute right-3 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:scale-105 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
