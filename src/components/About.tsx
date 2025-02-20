import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 px-4">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src="/me.png"
              alt="Chathuranga Jayasinghe"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <blockquote className="text-left text-justify text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              I'm Chathuranga Jayasinghe, a Senior SDET at TrackMan with over a decade of experience in test automation and quality engineering. As a Cypress Ambassador, I actively contribute to advancing testing methodologies.
            </motion.p>
            
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Based in Hørsholm, Denmark, I specialize in optimizing software testing processes, ensuring scalable, efficient, and high-quality solutions. Passionate about mentoring, continuous learning, and fostering a strong testing community, I thrive on leveraging cutting-edge automation frameworks to enhance product development.
            </motion.p>
            
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Let's connect and explore how my expertise can contribute to your project's success!
            </motion.p>
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;