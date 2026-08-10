import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Orb 1: Cyan / Tealy Glow */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute -top-[10%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-cyan-500/25 via-teal-500/15 to-transparent blur-[120px]"
        />

        {/* Orb 2: Royal Blue Glow */}
        <motion.div
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.15, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute top-[20%] right-[5%] w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-transparent blur-[130px]"
        />

        {/* Orb 3: Deep Purple Accent */}
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, 90, -60, 0],
            scale: [0.9, 1.2, 1, 0.9],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-10%] left-[25%] w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] rounded-full bg-gradient-to-r from-purple-600/20 via-violet-600/15 to-transparent blur-[140px]"
        />

        {/* Grid pattern overlay for tech aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradientBackground;
