import { Star } from 'lucide-react';

interface AnimeSectionProps {
  titleEn: string;
  titleJp: string;
  titleRu: string;
  rating: string;
  imageUrl: string;
  index: number;
  layout: "bottom-left" | "top-right" | "center-left" | "bottom-right" | "top-left" | "center-right";
}

export function AnimeSection({ titleEn, titleJp, titleRu, rating, imageUrl, index, layout }: AnimeSectionProps) {
  const getLayoutClasses = () => {
    switch (layout) {
      case "bottom-left":
        return "justify-end items-start";
      case "top-right":
        return "justify-start items-end";
      case "center-left":
        return "justify-center items-start";
      case "bottom-right":
        return "justify-end items-end";
      case "top-left":
        return "justify-start items-start";
      case "center-right":
        return "justify-center items-end";
      default:
        return "justify-end items-start";
    }
  };

  const getGradientClasses = () => {
    switch (layout) {
      case "bottom-left":
        return "bg-gradient-to-tr from-black/90 via-black/50 to-black/20";
      case "top-right":
        return "bg-gradient-to-bl from-black/90 via-black/50 to-black/20";
      case "center-left":
        return "bg-gradient-to-r from-black/90 via-black/50 to-black/20";
      case "bottom-right":
        return "bg-gradient-to-tl from-black/90 via-black/50 to-black/20";
      case "top-left":
        return "bg-gradient-to-br from-black/90 via-black/50 to-black/20";
      case "center-right":
        return "bg-gradient-to-l from-black/90 via-black/50 to-black/20";
      default:
        return "bg-gradient-to-tr from-black/90 via-black/50 to-black/20";
    }
  };

  const getTextAlignment = () => {
    if (layout.includes("right")) {
      return "text-right";
    }
    return "text-left";
  };

  return (
    <section className="relative h-screen w-full snap-start snap-always overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 ${getGradientClasses()}`} />
      </div>

      {/* Content */}
      <div className={`relative h-full flex flex-col ${getLayoutClasses()} p-8 md:p-16 lg:p-20`}>
        <div className={`max-w-4xl ${getTextAlignment()}`}>
          {/* Index Number */}
          <div className="mb-4">
            <span className="text-6xl md:text-8xl text-white/20 tracking-tight">
              #{index.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Titles */}
          <div className="space-y-3 mb-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
              {titleEn}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80">
              {titleJp}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-white/60">
              {titleRu}
            </p>
          </div>

          {/* Rating */}
          <div className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 ${layout.includes("right") ? "flex-row-reverse" : ""}`}>
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-2xl text-white">{rating}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        {index < 14 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
