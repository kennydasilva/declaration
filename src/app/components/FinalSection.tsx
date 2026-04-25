import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function FinalSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 relative overflow-hidden">
      {/* Animated Background Hearts */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-8 h-8 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart className="w-20 h-20 text-white mx-auto mb-8 fill-current animate-pulse" />

          <h2
            className="mb-8 text-white drop-shadow-lg"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              lineHeight: "1.2"
            }}
          >
            Amo-te de todas as formas ❤️
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 text-white text-opacity-90"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: "300"
            }}
          >
            Ontem, hoje, amanhã e para sempre
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-12 py-5 bg-white text-pink-600 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              fontWeight: "500"
            }}
          >
            Para sempre contigo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
