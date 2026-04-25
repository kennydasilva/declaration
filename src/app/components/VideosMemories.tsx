import { motion } from "motion/react";
import { Play, Heart } from "lucide-react";
import v38 from "./videos/v38.mp4";
import f18 from "./videos/f18.jpg";

const videoMemories = [
  {
    title: "Estávamos tão lindos 😍❤️",
    description: "Sinto-me tão feliz ao teu lado 🥺💞… és a melhor parte da minha vida 💘✨.",
    src: v38,
    type: "video"
  },
  {
    title: "Não supero isto 😭❤️",
    description: "Tu és tão incrível 😍✨… fico tão feliz por te ter na minha vida 🥺💖. Amo-te muito minha princesa 👑💘.",
    src: f18,
    type: "image"
  }
];

export default function VideosMemories() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

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
            Não aguento com estas memórias nossas 🥺❤️💘
          </h2>

          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Quero tirar muito mais fotos e vídeos contigo 😍📸💞  
            cada momento contigo é especial ❤️✨
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {videoMemories.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* MEDIA */}
                <div className="relative aspect-video overflow-hidden">

                  {video.type === "video" ? (
                    <video
                      src={video.src}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <img
                      src={video.src}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  )}

                  {/* PLAY BUTTON */}
                  {video.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                        <Play className="w-8 h-8 text-pink-500 group-hover:text-white ml-1" />
                      </div>
                    </div>
                  )}

                </div>

                {/* INFO */}
                <div className="p-6">
                  <h3
                    className="mb-2 text-pink-600"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem"
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {video.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 fill-current" />

            <p
              className="text-gray-600 mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Cada momento contigo é único 😍❤️  
              e eu amo viver tudo isso contigo 🥺💞
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}