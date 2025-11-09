import { useState } from 'react';

interface LoreCardProps {
  rune: string;
  title: string;
  description: string;
}

export default function LoreCard({ rune, title, description }: LoreCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg border border-amber-400/20 bg-black/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-400/30 hover:scale-105">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="relative z-10 text-center space-y-4">
          <div
            className={`text-6xl transition-transform duration-500 ${
              isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
            }`}
            style={{
              textShadow: isHovered ? '0 0 20px rgba(212, 175, 55, 0.6)' : 'none',
            }}
          >
            {rune}
          </div>

          <h3 className="text-xl font-serif text-amber-300">{title}</h3>

          <p
            className={`text-gray-400 text-sm leading-relaxed transition-all duration-500 ${
              isHovered ? 'opacity-100 max-h-40' : 'opacity-70 max-h-32'
            }`}
          >
            {description}
          </p>

          <div
            className={`pt-2 text-amber-500 text-xs font-light transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Click to explore →
          </div>
        </div>
      </div>
    </div>
  );
}
