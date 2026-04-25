import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function SpecialMessage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 fill-current animate-pulse" />
            <h2
              className="mb-4 text-pink-600"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 6vw, 4rem)"
              }}
            >
              Uma mensagem do meu coração para ti ❤️💌
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200 to-transparent rounded-bl-full opacity-30" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-200 to-transparent rounded-tr-full opacity-30" />

              <div className="relative z-10">
                
                <div className="mb-6 text-pink-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Meu amor ❤️,
                </div>

                <div
                  className="space-y-6 text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem" }}
                >

                  <p>
                    O tempo passa tão rápido, meu amor 😍❤️… nem parece que já estamos prestes a completar 4 anos juntos 💞✨.  
                    Ainda me lembro do dia em que começámos a namorar 🥺💘, parece que foi ontem…  
                    O nosso namoro foi uma das melhores coisas que já aconteceram na minha vida 💖,  
                    e é por isso que esta data é tão especial para mim 🎉❤️,  
                    e por isso que a celebro com tanto amor e carinho 💕🥰.
                  </p>

                  <p>
                    Tu ensinaste-me o que é o amor de verdade ❤️‍🔥💘.  
                    Ensinaste-me a preocupar-me com alguém além de mim 🥺💞,  
                    contigo aprendi a ser mais paciente e a deixar o orgulho de lado 🙏💖.  
                    Aprendi a valorizar o que nos aproxima e a afastar o que nos separa 🚫💔➡️❤️.  
                    Hoje já não tenho dúvidas… é contigo que quero partilhar a minha vida para sempre 💍❤️.  
                    Esse sentimento cresce a cada dia 🌹✨… cada vez mais quero estar contigo 🥰💞.
                  </p>

                  <p>
                    Quase 4 anos depois, posso dizer com toda a certeza: amo-te profundamente ❤️‍🔥😍.  
                    És contigo que quero crescer, dia após dia 🌱💞.  
                    Tu fazes-me feliz, meu amor 🥺❤️, fazes-me sentir tão especial ✨💘.  
                    Eu desejo-te toda a felicidade do mundo 🌍💖.
                  </p>

                  <p>
                    Obrigado por seres essa pessoa maravilhosa que és 😍💐,  
                    por cada sorriso 😊💞, cada abraço 🤗❤️, cada momento vivido.  
                    Obrigado por cada instante da tua vida que dedicaste a mim 🥺💘.  
                    És tão incrível, tão carinhosa, tão linda, tão inteligente 😻✨.  
                    Dás-me tanto apoio 🤍🙏… tenho milhões de motivos para te amar ❤️‍🔥  
                    e para te agradecer por tudo 💕.  
                    Amo-te muito, minha princesa 👑💖.
                  </p>

                  <p>
                    Eu amo-te muito ❤️ e vou amar-te ainda mais com o passar do tempo ⏳💞.  
                    Quero celebrar esta data contigo muitas vezes 🎉❤️,  
                    até realizarmos aquele sonho juntos 💍🥺✨.  
                    Sempre foste tu… e sempre serás tu 👑💖.
                  </p>

                  <p className="text-pink-600" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}>
                    Feliz aniversário de namoro, meu amor! 🎉❤️  
                    Que venham muitos mais anos de felicidade juntos 🥰💞.  
                    Amo-te para sempre ❤️‍🔥💘
                  </p>

                  <p>
                    Juntos seremos felizes hoje, amanhã e para sempre 🥺❤️💞
                  </p>

                  <div className="mt-8 text-right">
                    <p className="text-pink-600" style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2rem" }}>
                      Amo-te muito Érica❤️😍💘
                    </p>
                    <p className="text-gray-600 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {new Date().toLocaleDateString('pt-PT', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>

                </div>
              </div>

              <div className="absolute top-8 left-8 text-pink-200 opacity-20">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <div className="absolute bottom-8 right-8 text-rose-200 opacity-20">
                <Heart className="w-8 h-8 fill-current" />
              </div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 rounded-3xl -z-10 blur-lg opacity-30" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}