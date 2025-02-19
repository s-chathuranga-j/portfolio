import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Sysco LABS',
      role: 'Senior Software Development Engineer in Test',
      duration: '2021 - Present',
      contributions: [
        'Led the implementation of end-to-end test automation frameworks using Cypress and Playwright',
        'Established best practices for test automation and CI/CD pipelines',
        'Mentored team members on test automation and quality practices'
      ],
      logo: '/company-logos/sysco-labs.png'
    },
    {
      company: 'WSO2',
      role: 'Senior Software Engineer',
      duration: '2018 - 2021',
      contributions: [
        'Developed and maintained test automation frameworks for cloud-native applications',
        'Implemented performance testing solutions using JMeter and K6',
        'Contributed to open-source testing tools and frameworks'
      ],
      logo: '/company-logos/wso2.png'
    },
    {
      company: 'Virtusa',
      role: 'Software Engineer',
      duration: '2015 - 2018',
      contributions: [
        'Developed automated test suites for enterprise applications',
        'Implemented continuous testing practices in Agile teams',
        'Conducted training sessions on test automation tools'
      ],
      logo: '/company-logos/virtusa.png'
    }
  ];

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

  return (
    <section className="py-16 px-4">
      <h2 className="section-title text-center">Professional Experience</h2>
      
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="timeline-item"
            variants={itemVariants}
          >
            <div className="timeline-dot" />
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
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
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.contributions.map((contribution, i) => (
                  <li key={i}>{contribution}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;