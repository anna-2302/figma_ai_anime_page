import { AnimeSection } from './components/anime-section';
import { HeroSection } from './components/hero-section';
import { ClosingCredits } from './components/closing-credits';

export default function App() {
  const animeList = [
    {
      titleEn: "Ping Pong the Animation",
      titleJp: "ピンポン THE ANIMATION",
      titleRu: "Пинг-Понг",
      rating: "9/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality100,width=1920/keyart/GRJQV0N3Y-backdrop_wide",
      layout: "bottom-left"
    },
    {
      titleEn: "Kaiju No. 8",
      titleJp: "怪獣8号",
      titleRu: "Кайдзю №8)",
      rating: "10/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/GG5H5XQ7D-backdrop_wide",
      layout: "top-right"
    },
    {
      titleEn: "Chainsaw Man Movie: Reze Arc",
      titleJp: "チェンソーマン 映画：レゼ編",
      titleRu: "Человек-бензопила: Фильм - Арка Резе",
      rating: "9/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920,height=675/catalog/crunchyroll/da6f7b78647a880311cdaaf6c9ff603e.jpg",
      layout: "center-left"
    },
    {
      titleEn: "The Apothecary Diaries",
      titleJp: "薬屋のひとりごと",
      titleRu: "Дневник аптекаря",
      rating: "9/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/G3KHEVDJ7-backdrop_wide",
      layout: "bottom-right"
    },
    {
      titleEn: "Demon Slayer",
      titleJp: "鬼滅の刃",
      titleRu: "Истребитель демонов",
      rating: "8/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/G8DHV7809-backdrop_wide",
      layout: "top-left"
    },
    {
      titleEn: "Summertime Render",
      titleJp: "サマータイムレンダ",
      titleRu: "Призрак лета",
      rating: "8/10",
      imageUrl: "https://assets-prd.ignimgs.com/2023/02/07/str-1675802278787.jpg?width=1712&format=jpg&quality=100",
      layout: "center-right"
    },
    {
      titleEn: "Gintama",
      titleJp: "銀魂",
      titleRu: "Гинтама",
      rating: "11/10",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/d3acdaf66cb67fa38e19d5ccac442f720dd395db4ccaaef75af1ab800a744540._SX1920_FMwebp_.jpg",
      layout: "bottom-left"
    },
    {
      titleEn: "Sakamoto Days",
      titleJp: "SAKAMOTO DAYS",
      titleRu: "Дни Сакамото",
      rating: "8/10",
      imageUrl: "https://assets-prd.ignimgs.com/2025/01/11/sakamato-blogroll-1736557600310.jpg?width=1712&format=jpg&auto=webp&quality=100",
      layout: "top-right"
    },
    {
      titleEn: "Haikyuu!!",
      titleJp: "ハイキュー!!",
      titleRu: "Волейбол!!",
      rating: "11/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/GY8VM8MWY-backdrop_wide",
      layout: "center-left"
    },
    {
      titleEn: "Samurai Champloo",
      titleJp: "サムライチャンプルー",
      titleRu: "Самурай Чамплу",
      rating: "10/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/G6WEK0026-backdrop_wide",
      layout: "bottom-right"
    },
    {
      titleEn: "Hunter x Hunter",
      titleJp: "HUNTER×HUNTER",
      titleRu: "Хантер х Хантер",
      rating: "10/10",
      imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/the-best-anime-to-watch-if-you-like-hunter-x-hunter-b.jpg?q=70&fit=crop&w=1296&h=891&dpr=1",
      layout: "top-left"
    },
    {
      titleEn: "Dandadan",
      titleJp: "ダンダダン",
      titleRu: "Дандадан",
      rating: "8/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/GG5H5XQ0D-backdrop_wide",
      layout: "center-right"
    },
    {
      titleEn: "Dororo and Hyakkimaru (1969)",
      titleJp: "どろろと百鬼丸 (1969)",
      titleRu: "Дороро и Хяккимару (1969)",
      rating: "9/10",
      imageUrl: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/07/Dororo-1969-1.jpg?q=100",
      layout: "bottom-left"
    },
    {
      titleEn: "Zom 100: Bucket List of the Dead",
      titleJp: "ゾン100～ゾンビになるまでにしたい100のこと～",
      titleRu: "Зомби 100: Список желаний перед смертью",
      rating: "8/10",
      imageUrl: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/GJ0H7QGQK-backdrop_wide",
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
