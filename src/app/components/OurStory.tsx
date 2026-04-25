import { motion } from "motion/react";
import { Heart, Sparkles, CalendarHeart } from "lucide-react";

const storyMilestones = [
  {
    icon: CalendarHeart,
    title: "O Início 💘",
    text: "Conhecemo-nos na explicação 🥺… um momento simples, mas que mudou tudo na minha vida ❤️✨.",
    gradient: "from-pink-400 to-rose-400"
  },
  {
    icon: Sparkles,
    title: "O Desenvolvimento 💞",
    text: "Mal sabia eu que te tornarias tão importante para mim 🥺❤️. Conhecer-te foi uma das melhores coisas que já aconteceram na minha vida 💖✨… foste chegando devagar e hoje és tudo 😍💘.",
    gradient: "from-rose-400 to-orange-400"
  },
  {
    icon: Heart,
    title: "Hoje ❤️‍🔥",
    text: "Hoje amo-te profundamente 😍❤️ e não consigo imaginar a minha vida sem ti 🥺💞. És tudo para mim, a minha paz, a minha alegria e o meu amor para sempre 👑💖.",
    gradient: "from-orange-400 to-pink-500"
  }
];

export default function OurStory() {
  return (
    <section id="nossa-historia" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
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
            Amo-te muito, Érica 🥹❤️💘
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            És tão linda e maravilhosa 😍✨… eu não aguento contigo, meu amor 🥺❤️💞
          </p>
        </motion.div>

        <div className="relative">
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 via-rose-300 to-orange-200 hidden md:block" />

          {storyMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                {/* CONTENT */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    
                    <h3
                      className="mb-3 text-pink-600"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.75rem"
                      }}
                    >
                      {milestone.title}
                    </h3>

                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {milestone.text}
                    </p>

                  </div>
                </div>

                {/* ICON DESKTOP */}
                <div
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r items-center justify-center shadow-lg z-10 ${milestone.gradient}`}
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* ICON MOBILE */}
                <div className={`md:hidden mb-4 w-12 h-12 rounded-full bg-gradient-to-r ${milestone.gradient} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}