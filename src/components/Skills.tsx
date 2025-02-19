import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Test Automation': [
      { name: 'Cypress', level: 'Expert', description: 'Advanced test automation with modern web testing framework' },
      { name: 'Playwright', level: 'Expert', description: 'Cross-browser testing and automation' },
      { name: 'Selenium', level: 'Advanced', description: 'Web automation testing across multiple platforms' },
      { name: 'Applitools', level: 'Advanced', description: 'Visual testing and monitoring' }
    ],
    'Programming Languages': [
      { name: 'TypeScript', level: 'Expert', description: 'Modern web development with type safety' },
      { name: 'JavaScript', level: 'Expert', description: 'Frontend and Node.js development' },
      { name: 'Java', level: 'Advanced', description: 'Backend development and testing frameworks' },
      { name: 'C#', level: 'Intermediate', description: '.NET-based test automation' }
    ],
    'CI/CD & Tools': [
      { name: 'Jenkins', level: 'Expert', description: 'Continuous integration and deployment' },
      { name: 'GitHub Actions', level: 'Expert', description: 'Automated workflows and deployments' },
      { name: 'Azure DevOps', level: 'Advanced', description: 'End-to-end DevOps solutions' }
    ],
    'Databases': [
      { name: 'PostgreSQL', level: 'Advanced', description: 'Relational database management' },
      { name: 'MongoDB', level: 'Intermediate', description: 'NoSQL database solutions' },
      { name: 'MS SQL Server', level: 'Advanced', description: 'Enterprise database management' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 px-4">
      <h2 className="section-title text-center">Skills & Expertise</h2>

      <motion.div
        className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            className="card"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-secondary">{category}</h3>
            <div className="grid gap-4">
              {skillList.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="skill-tag text-sm">{skill.level}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;