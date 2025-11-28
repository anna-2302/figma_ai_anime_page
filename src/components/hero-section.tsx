import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full snap-start snap-always overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://images8.alphacoders.com/749/749455.png)` }}
        initial={{ scale: 1.3, rotate: 2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Overlay Gradient with color shift */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-black/70 to-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated light streaks */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-20 text-center overflow-hidden">
        <div className="max-w-5xl space-y-8">
          {/* Year Badge */}
          <motion.div 
            className="inline-flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <motion.span 
              className="px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-pink-400/30 rounded-full text-white"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(236, 72, 153, 0.3)'
                ],
                borderColor: [
                  'rgba(236, 72, 153, 0.3)',
                  'rgba(168, 85, 247, 0.5)',
                  'rgba(236, 72, 153, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              2025
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-tight"
            >
              <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                2025
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.7,
                  type: "spring",
                  stiffness: 150
                }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    textShadow: [
                      '0 0 20px rgba(236, 72, 153, 0.5)',
                      '0 0 40px rgba(168, 85, 247, 0.7)',
                      '0 0 20px rgba(236, 72, 153, 0.5)'
                    ]
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    textShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  Top-Tier
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
              >
                Anime
              </motion.div>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Presenting you a collection of the absolute best anime I watched in 2025 so far.
          </motion.p>

          {/* Count */}
          <motion.div 
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-pink-400 to-purple-400"
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
            <motion.span 
              className="text-white/70"
              animate={{
                color: ['rgba(255, 255, 255, 0.7)', 'rgba(236, 72, 153, 0.9)', 'rgba(255, 255, 255, 0.7)']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              14 Masterpieces
            </motion.span>
            <motion.div 
              className="h-px w-12 bg-gradient-to-l from-transparent via-purple-400 to-pink-400"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7, type: "spring", stiffness: 200 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span 
              className="text-white/40 text-sm"
              animate={{
                textShadow: [
                  '0 0 10px rgba(168, 85, 247, 0)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 10px rgba(168, 85, 247, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll to explore
            </motion.span>
            <motion.div 
              className="w-6 h-10 border-2 border-pink-400/40 rounded-full flex items-start justify-center p-2"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(236, 72, 153, 0.2)',
                  '0 0 20px rgba(236, 72, 153, 0.4)',
                  '0 0 10px rgba(236, 72, 153, 0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
