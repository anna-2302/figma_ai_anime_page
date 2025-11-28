import { AnimeSection } from './components/anime-section';
import { HeroSection } from './components/hero-section';
import { ClosingCredits } from './components/closing-credits';

export default function App() {
  const animeList = [
    {
      titleEn: "Ping Pong the Animation",
      titleJp: "ピンポン THE ANIMATION",
      titleRu: "Пинг-Понг",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1576617497557-22895ee5930b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5nJTIwcG9uZyUyMHNwb3J0cyUyMGFuaW1lfGVufDF8fHx8MTc2NDM1OTgwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "bottom-left"
    },
    {
      titleEn: "Kaiju No. 8 (Season 2)",
      titleJp: "怪獣8号 シーズン2",
      titleRu: "Кайдзю №8 (Сезон 2)",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1761948245809-9c88fcee1f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWlqdSUyMG1vbnN0ZXIlMjBnaWFudHxlbnwxfHx8fDE3NjQzNTk4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "top-right"
    },
    {
      titleEn: "Chainsaw Man Movie: Reze Arc",
      titleJp: "チェンソーマン 映画：レゼ編",
      titleRu: "Человек-бензопила: Фильм - Арка Резе",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1713981277479-90d31eb93c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpbnNhdyUyMGRhcmslMjB1cmJhbnxlbnwxfHx8fDE3NjQzNTk4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "center-left"
    },
    {
      titleEn: "The Apothecary Diaries",
      titleJp: "薬屋のひとりごと",
      titleRu: "Дневник аптекаря",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1646274719467-4ac18bfdc5fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHBhbGFjZSUyMGltcGVyaWFsfGVufDF8fHx8MTc2NDM1OTgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "bottom-right"
    },
    {
      titleEn: "Demon Slayer: Mugen Train",
      titleJp: "鬼滅の刃 無限列車編",
      titleRu: "Истребитель демонов: Поезд Бесконечный",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1672687652124-9d2a6a9e162a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbiUyMHRyYWluJTIwbmlnaHR8ZW58MXx8fHwxNzY0MzU5ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "top-left"
    },
    {
      titleEn: "Summertime Render",
      titleJp: "サマータイムレンダ",
      titleRu: "Призрак лета",
      rating: "9/10",
      imageUrl: "https://images.unsplash.com/photo-1660217012346-561c3c5a7073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjQyODYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "center-right"
    },
    {
      titleEn: "Gintama",
      titleJp: "銀魂",
      titleRu: "Гинтама",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1723164965017-ea5d1c6945df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW11cmFpJTIwd2FycmlvciUyMGphcGFufGVufDF8fHx8MTc2NDM1OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "bottom-left"
    },
    {
      titleEn: "Sakamoto Days",
      titleJp: "SAKAMOTO DAYS",
      titleRu: "Дни Сакамото",
      rating: "9/10",
      imageUrl: "https://images.unsplash.com/photo-1623913519265-1974e1e90bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Nhc3NpbiUyMGFjdGlvbiUyMG5pbmphfGVufDF8fHx8MTc2NDM1OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "top-right"
    },
    {
      titleEn: "Haikyuu!!",
      titleJp: "ハイキュー!!",
      titleRu: "Волейбол!!",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1763263385537-86d8eaa737fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwc3BvcnRzJTIwY291cnR8ZW58MXx8fHwxNzY0MzU5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "center-left"
    },
    {
      titleEn: "Samurai Champloo",
      titleJp: "サムライチャンプルー",
      titleRu: "Самурай Чамплу",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1689493720779-f762ab7bb5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW11cmFpJTIwc3dvcmQlMjBrYXRhbmF8ZW58MXx8fHwxNzY0MzU5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "bottom-right"
    },
    {
      titleEn: "Hunter x Hunter",
      titleJp: "HUNTER×HUNTER",
      titleRu: "Хантер х Хантер",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1760772483429-e1efeb37e373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBhZHZlbnR1cmUlMjBteXN0ZXJpb3VzfGVufDF8fHx8MTc2NDM1OTgxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "top-left"
    },
    {
      titleEn: "Dandadan",
      titleJp: "ダンダダン",
      titleRu: "Дандадан",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/flagged/photo-1570740227866-8dd4395648e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm5hdHVyYWwlMjBhbGllbiUyMHNwYWNlfGVufDF8fHx8MTc2NDM1OTgxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "center-right"
    },
    {
      titleEn: "Dororo and Hyakkimaru (1969)",
      titleJp: "どろろと百鬼丸 (1969)",
      titleRu: "Дороро и Хяккимару (1969)",
      rating: "10/10",
      imageUrl: "https://images.unsplash.com/photo-1763162240032-c40ba2833f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZldWRhbCUyMHdhcnJpb3J8ZW58MXx8fHwxNzY0MzU5ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "bottom-left"
    },
    {
      titleEn: "Zom 100: Bucket List of the Dead",
      titleJp: "ゾン100～ゾンビになるまでにしたい100のこと～",
      titleRu: "Зомби 100: Список желаний перед смертью",
      rating: "9/10",
      imageUrl: "https://images.unsplash.com/photo-1759086434925-d41f99d8bec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6b21iaWUlMjBhcG9jYWx5cHNlJTIwY2l0eXxlbnwxfHx8fDE3NjQzNTk4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "top-right"
    }
  ];

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-white">Anna's Top Anime of 2025</h1>
        </div>
      </header>

      {/* All Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Hero Section */}
        <HeroSection />

        {/* Anime Sections */}
        {animeList.map((anime, index) => (
          <AnimeSection
            key={index}
            titleEn={anime.titleEn}
            titleJp={anime.titleJp}
            titleRu={anime.titleRu}
            rating={anime.rating}
            imageUrl={anime.imageUrl}
            index={index + 1}
            layout={anime.layout as "bottom-left" | "top-right" | "center-left" | "bottom-right" | "top-left" | "center-right"}
          />
        ))}

        {/* Closing Credits */}
        <ClosingCredits />
      </div>
    </div>
  );
}
