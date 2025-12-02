import { AnimeSection } from './components/anime-section';
import { HeroSection } from './components/hero-section';
import { ClosingCredits } from './components/closing-credits';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [activeAnimeIndex, setActiveAnimeIndex] = useState<number | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarAnimating, setSidebarAnimating] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.snap-y');
      if (!scrollContainer) return;

      // Show header only when scrolled past the first section (hero)
      const scrollTop = scrollContainer.scrollTop;
      
      // Hide on hero (first screen when scrollTop is near 0), show when scrolled to section 2+
      // Using 100 pixels threshold - if scrolled more than 100px, we're past the hero
      if (scrollTop > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      // Track active anime section for sidebar
      const sections = document.querySelectorAll('section');
      const containerRect = scrollContainer.getBoundingClientRect();
      const viewportCenter = containerRect.top + containerRect.height / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (viewportCenter >= rect.top && viewportCenter < rect.bottom) {
          // Hero section is index 0, anime sections start at index 1
          if (index > 0 && index <= animeList.length) {
            setActiveAnimeIndex(index - 1);
            if (!showSidebar) {
              setShowSidebar(true); // Show sidebar when on anime sections
            }
          } else {
            setActiveAnimeIndex(null);
            if (showSidebar) {
              setSidebarAnimating(true); // Trigger fade-out animation
              setTimeout(() => {
                setShowSidebar(false);
                setSidebarAnimating(false);
              }, 300); // Match animation duration
            }
          }
        }
      });
    };

    // Use a timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      const scrollContainer = document.querySelector('.snap-y');
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check to ensure it starts hidden
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const scrollContainer = document.querySelector('.snap-y');
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [animeList.length]);

  const scrollToAnime = (animeIndex: number) => {
    const sections = document.querySelectorAll('section');
    const targetSection = sections[animeIndex + 1]; // +1 because hero is first
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      {/* All Sections */}
      <div className="snap-y h-screen overflow-y-scroll scroll-smooth" style={{ scrollSnapType: 'y proximity' }}>
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

      {/* Header - Only render when showHeader is true */}
      {showHeader && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 animate-in fade-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-white">🗾Anna's Top Anime of 2025</h1>
          </div>
        </header>
      )}

      {/* Anime Navigation Sidebar - Only show when viewing anime sections */}
      {showSidebar && (
        <div
          style={{
            position: 'fixed',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10000,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '6px 4px',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
            animation: sidebarAnimating ? 'fadeOut 0.3s ease-out' : 'fadeIn 0.3s ease-out',
          }}
        >
          <style>
            {`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-50%) translateX(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(-50%) translateX(0);
                }
              }
              @keyframes fadeOut {
                from {
                  opacity: 1;
                  transform: translateY(-50%) translateX(0);
                }
                to {
                  opacity: 0;
                  transform: translateY(-50%) translateX(-10px);
                }
              }
            `}
          </style>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {animeList.map((anime, index) => {
              const isActive = activeAnimeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => scrollToAnime(index)}
                  title={anime.titleEn}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    background: isActive
                      ? 'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: 'none',
                    borderRadius: '7px',
                    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.55)',
                    fontSize: '12px',
                    fontWeight: isActive ? '700' : '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isActive
                      ? '0 2px 6px rgba(236, 72, 153, 0.3)'
                      : 'none',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {index + 1}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '-5px',
                        width: '2.5px',
                        height: '12px',
                        background: 'linear-gradient(180deg, rgb(236, 72, 153), rgb(168, 85, 247))',
                        borderRadius: '2px',
                        boxShadow: '0 0 4px rgba(236, 72, 153, 0.4)',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
