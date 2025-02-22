import { motion } from 'framer-motion';

const Avatar = () => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-lg"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <div className="absolute inset-0 z-10">
        <img
          src="/portfolio/avatar.png"
          alt="Profile"
          className="w-full h-full object-contain"
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-transparent"
        style={{
          background: 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))',
          maskImage: 'radial-gradient(transparent 65%, black 65%)',
          WebkitMaskImage: 'radial-gradient(transparent 65%, black 65%)'
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
};

export default Avatar;