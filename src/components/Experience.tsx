import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const experiences = [
    {
      company: 'TrackMan',
      role: 'Software Development Engineer in Test (SDET)',
      duration: 'Mar 2022 - Dec 2024',
      contributions: [
        'Developed and maintained automated testing frameworks for sports tracking systems',
        'Led test automation initiatives and quality assurance processes',
        'Collaborated with cross-functional teams to ensure product quality',
        'Implemented CI/CD pipelines for automated testing workflows'
      ],
      logo: '/company-logos/wso2.png'
    },
    {
      company: 'TurboTenant',
      role: 'Software Development Engineer in Test (SDET)',
      duration: 'Jul 2020 - Feb 2022',
      contributions: [
        'Implemented test automation strategies for rental property management applications',
        'Designed and maintained automated testing frameworks',
        'Improved test coverage and reliability of core features',
        'Collaborated with developers to implement quality-first development practices'
      ],
      logo: '/company-logos/turbotenant.png'
    },
    {
      company: 'Riverty',
      role: 'Quality Assurance Engineer',
      duration: 'May 2018 - Jun 2020',
      contributions: [
        'Ensured the quality and reliability of financial services software through rigorous testing',
        'Developed and executed comprehensive test plans',
        'Implemented automated testing solutions for critical workflows',
        'Collaborated with stakeholders to define and maintain quality standards'
      ],
      logo: '/company-logos/riverty.png'
    }
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      className="py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Experience
      </motion.h2>
      
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {visibleExperiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot" />
              <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="card hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4 justify-start">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-primary dark:text-secondary">
                        {exp.company}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{exp.duration}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-left">
                    {exp.contributions.map((contribution, i) => (
                      <li key={i}>{contribution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {experiences.length > 3 && (
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary bg-gradient-to-r from-primary to-secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {showAll ? 'Show Less' : 'View More'}
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Experience;