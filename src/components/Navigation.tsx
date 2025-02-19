import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <motion.div 
        className="px-6 py-3 bg-white/10 dark:bg-dark/10 backdrop-blur-lg rounded-full border border-white/20 dark:border-gray-800/20 shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-link font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;