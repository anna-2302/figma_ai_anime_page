import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function ClosingCredits() {
  return (
    <section className="relative h-screen w-full snap-start snap-always overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black">
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Credits Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-20 text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Sparkle Icon */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-yellow-300" />
            </motion.div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="space-y-2"
              animate={{
                textShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(236, 72, 153, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
                To Be Continued...
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                つづく
              </p>
            </motion.div>

            <motion.div
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              More incredible anime adventures await in 2026
            </motion.p>
          </motion.div>

          {/* Credits Roll */}
          <motion.div
            className="space-y-4 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <p className="text-sm md:text-base uppercase tracking-widest">Curated by</p>
              <p className="text-2xl md:text-3xl text-white mt-1">Anna</p>
            </motion.div>

            <motion.div
              className="h-px w-16 mx-auto bg-white/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 2.3 }}
            />

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <p className="text-sm md:text-base uppercase tracking-widest">Year</p>
              <p className="text-xl md:text-2xl text-white/90 mt-1">2025</p>
            </motion.div>
          </motion.div>

          {/* Footer tagline */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.p
              className="text-sm md:text-base text-white/40 italic"
              animate={{
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              "The adventure never ends..."
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}
