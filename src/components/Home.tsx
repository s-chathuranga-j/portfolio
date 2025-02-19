import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import Avatar from './Avatar';

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/ChathurangaJayasinghe', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/chathuranga-jayasinghe', label: 'LinkedIn' },
    { icon: FaMedium, url: 'https://medium.com/@schathurangaj', label: 'Medium' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4">
      <div className="text-center pt-8">
        <Avatar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-6"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient font-raleway">
            Chathuranga Jayasinghe
          </h1>
          <h2 className="text-2xl text-gray-700 dark:text-gray-300 font-raleway">
            Senior SDET | Cypress Ambassador
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-raleway">
            Building high-quality, scalable, and automated solutions for the future of testing.
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;