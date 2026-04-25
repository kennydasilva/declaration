import { motion } from "motion/react";
import { Heart, Star, Flame, Sparkles } from "lucide-react";

const feelings = [
  {
    icon: Heart,
    title: "És o meu pilar",
    description: "A tua força e apoio são a base que me sustenta todos os dias.",
    color: "pink"
  },
  {
    icon: Sparkles,
    title: "Fazes-me acreditar que tudo é possível",
    description: "Contigo ao meu lado, sinto que posso conquistar o mundo.",
    color: "rose"
  },
  {
    icon: Star,
    title: "Admiro a tua força e personalidade",
    description: "És única, especial e absolutamente incrível em tudo o que és.",
    color: "orange"
  },
  {
    icon: Flame,
    title: "És a minha inspiração",
    description: "Cada dia contigo me inspira a ser uma pessoa melhor.",
    color: "pink"
  }
];

export default function WhatIFeel() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-pink-600"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)"
            }}
          >
            O que sinto por ti
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Palavras que nem sempre consigo dizer, mas que sinto profundamente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feelings.map((feeling, index) => {
            const Icon = feeling.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feeling.color}-400 to-${feeling.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="mb-4 text-pink-700"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem"
                    }}
                  >
                    {feeling.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {feeling.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
