import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import f18 from "./videos/f18.jpg";

export default function AboutUs() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
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
            Sobre Nós ❤️
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            A nossa jornada juntos 💞
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div
              className="space-y-6 text-gray-700"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
            >
              <p className="leading-relaxed">
                Sabes… no início discutíamos tanto 😭😂 que às vezes eu achava que não íamos durar muito tempo.  
                Discutíamos e tu ficavas offline uma semana inteira 😭😂…  
                também eras muito stressadinha 😭😂, sofri contigo 😭😂.  
                E o mais engraçado é que eram sempre coisas sem sentido 😭😂…  
                mas mesmo assim nunca terminámos 😭❤️.
              </p>

              <p className="leading-relaxed">
                Mesmo quando não tinhas razão, ficavas dias zangada 😭😂.  
                Lembro-me de uma vez que ficaste offline vários dias, e quando reclamei…  
                ficaste ainda mais zangada e sumiste mais uma semana 😭😂.  
                Eu até podia estar com razão, mas acabava sempre preocupado contigo 🥺❤️  
                e lá ia eu pedir desculpa 😭😂.  
                Não foi fácil chegar até aqui… mas conseguimos 💪❤️.
              </p>

              <p className="leading-relaxed">
                Foi aí que aprendi que contigo não vale a pena discutir 😭😂,  
                porque quando zangas… zangas mesmo 😭😂.  
                E percebi que não dá para “ganhar” de ti 😭😂.  
                Mas também… não tem como desistir de ti ❤️,  
                já vivemos muita coisa juntos 💞.
              </p>

              <p
                className="leading-relaxed text-pink-600"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}
              >
                Mas com o tempo mudaste 🥺❤️… ficaste mais calma, mais tranquila 💞.  
                Hoje já não te zangas como antes 😭😂…  
                (também, com “Kenny o doce” 🌝😌😂 não tem como 😏😂).  
                Amo-te muito, minha vida ❤️😍,  
                e fico tão feliz por ver o quanto crescemos juntos 💖✨.
              </p>
            </div>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={f18}
                  alt="Nós dois juntos"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-400 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-300 to-pink-400 rounded-3xl -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}