import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("nossa-historia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 text-pink-300">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-32 right-20 w-16 h-16 text-rose-300">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 text-pink-200">
          <Heart className="w-full h-full fill-current" />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            className="mb-6 text-pink-600"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              lineHeight: "1.2"
            }}
          >
            Para o amor da minha vida ❤️
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-12 text-gray-700"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontWeight: "300"
          }}
        >
          Feliz aniversáriode namoro meu amor! Quase 4 anos juntos.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          onClick={scrollToStory}
          className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A nossa história
        </motion.button>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "-50px",
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.sin(i) * 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
