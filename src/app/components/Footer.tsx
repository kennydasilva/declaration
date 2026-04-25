import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-pink-600">
          <Heart className="w-5 h-5 fill-current" />
          <p style={{ fontFamily: "'Inter', sans-serif" }}>
            Feito com amor
          </p>
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <p className="mt-2 text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          {new Date().getFullYear()} · Uma surpresa especial para o amor da minha vida
        </p>
      </div>
    </footer>
  );
}
