import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import f21 from "./videos/f21.jpg";
import f4 from "./videos/f4.jpg";
import f13 from "./videos/f13.jpg";
import f3 from "./videos/f3.jpg";
import f22 from "./videos/f22.jpg";
import f29 from "./videos/f29.jpg";

const photos = [
  {
    caption: "És linda 😍❤️",
    placeholder: f21
  },
  {
    caption: "Maravilhosa 😻✨",
    placeholder: f4
  },
  {
    caption: "Minha princesa 👑💖",
    placeholder: f13
  },
  {
    caption: "Perfeita 💕🥺",
    placeholder: f3
  },
  {
    caption: "Radiante ✨😍",
    placeholder: f22
  },
  {
    caption: "Meu amor ❤️💘",
    placeholder: f29
  }
];

export default function PhotoGallery() {
  return (
    <section className="py-24 px-6 bg-white">
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
            Tu és sempre tão deslumbrante 😍❤️
          </h2>

          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sempre fico a olhar para as tuas fotos e vídeos 🥺📸💞…  
            e penso como tive a sorte de ter alguém tão maravilhosa como tu na minha vida 😍❤️.  
            Amo-te muito, minha princesa 👑💖💘
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">

                <ImageWithFallback
                  src={photo.placeholder}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className="text-white text-center"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "2rem"
                    }}
                  >
                    {photo.caption}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}