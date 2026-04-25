import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import v1 from "./videos/v1.mp4";
import v15 from "./videos/v15.mp4";
import v20 from "./videos/v20.mp4";
import v37 from "./videos/v37.mp4";
import v36 from "./videos/v36.mp4";

const moments = [
  {
    video: v1,
    text: "Tu és tão linda, meu amor 😍❤️"
  },
  {
    video: v15,
    text: "Tão maravilhosa 😻✨"
  },
  {
    video: v20,
    text: "Eu admiro-te tanto, minha princesa 🥺❤️"
  },
  {
    video: v37,
    text: "Os teus vídeos sempre me fascinam 😍🎥"
  },
  {
    video: v36,
    text: "E o mais incrível… eu nunca me canso de os ver 🥹❤️"
  }
];

export default function MomentsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ⏱️ troca automática a cada 15s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moments.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  // 🔁 garante que o vídeo reinicia e toca
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % moments.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + moments.length) % moments.length);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="mb-4 text-pink-600"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)"
            }}
          >
            Momentos Inesquecíveis ❤️
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* CAROUSEL */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >

                {/* 🎥 VIDEO */}
                <video
                  ref={videoRef}
                  src={moments[currentIndex].video}
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* TEXTO */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                >
                  <p
                    className="text-white text-center drop-shadow-lg"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "clamp(2rem, 5vw, 3.5rem)"
                    }}
                  >
                    {moments[currentIndex].text}
                  </p>
                </motion.div>

              </motion.div>
            </AnimatePresence>

            {/* BOTÕES */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {moments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-500 w-8'
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}