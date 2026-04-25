import { motion } from "motion/react";
import { Heart, Infinity, Sparkles } from "lucide-react";

export default function OurFuture() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="mb-8 text-pink-600"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)"
            }}
          >
            O Nosso Futuro
          </h2>

          <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-xl"
            >
              <Infinity className="w-16 h-16 text-white" strokeWidth={2.5} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-lg"
            >
              <Heart className="w-12 h-12 text-white fill-current" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p
              className="mb-8 text-pink-600"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                lineHeight: "1.4"
              }}
            >
              És a pessoa com quem quero casar
            </p>

            <p
              className="text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
            >
              Quando penso no futuro, vejo-nos juntos. Vejo uma vida partilhada, cheia de amor,
              cumplicidade e momentos felizes. Vejo-nos a ultrapassar desafios lado a lado,
              a celebrar vitórias juntos, a construir memórias que levaremos para sempre.
            </p>

            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
            >
              Quero passar o resto da minha vida contigo. Quero acordar todos os dias ao teu lado,
              cuidar de ti, fazer-te sorrir e ser o teu apoio em tudo. És a minha pessoa,
              hoje e sempre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12"
          >
            <div className="inline-block px-12 py-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full border-2 border-pink-300">
              <p
                className="text-pink-600"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
                }}
              >
                Para sempre contigo ∞
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
