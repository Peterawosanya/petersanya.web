import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, Database, Calculator, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "BSc in Mathematical Science",
      school: "Olabisi Onabanjo University",
      description: "Advanced mathematical concepts, statistical analysis, and problem-solving methodologies",
      icon: Calculator,
    },
    {
      degree: "Diploma in Data Processing",
      school: "Olabisi Onabanjo University",
      description: "Comprehensive training in data manipulation, analysis, and visualization techniques",
      icon: Database,
    }
  ];

  const specialties = [
    {
      icon: BrainCircuit,
      title: 'Data Analysis',
      description: 'Expert in transforming complex datasets into actionable insights using advanced mathematical models.',
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Specialized in efficient data handling, cleaning, and preparation for analysis.',
    },
    {
      icon: Calculator,
      title: 'Mathematical Modeling',
      description: 'Creating sophisticated mathematical models to solve real-world problems.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="relative w-64 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-white/10 rounded-2xl transform rotate-6"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="relative w-full h-full rounded-2xl overflow-hidden transform -rotate-3 transition-transform duration-300 shadow-xl"
              >
                <img
                  src="/pete 2.jpg"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              As a Mathematical Scientist and Data Processing specialist, I bring a unique blend of analytical thinking
              and technical expertise to every project. My academic background in Mathematical Sciences from Olabisi Onabanjo University,
              combined with practical experience in data processing, allows me to approach problems from both theoretical and
              practical perspectives.
            </p>
            <p className="text-lg text-gray-300">
              I specialize in translating complex mathematical concepts into practical solutions, making data-driven
              decisions accessible and actionable for businesses and organizations.
            </p>
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Roadmap Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Experience Roadmap
          </h3>
          <div className="relative max-w-xl mx-auto">
            <div className="border-l-4 border-blue-600 absolute h-full left-6 top-0 z-0" />
            <div className="space-y-12 pl-16">
              {/* Eddysoft */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-white mb-1">Vision X</h4>
                  <span className="text-blue-400 text-sm font-medium mb-2 block">Intern</span>
                  <p className="text-gray-300 text-sm">Gained hands-on experience in frontend development, collaborating with a team and learning industry best practices.</p>
                </div>
              </motion.div>
              {/* Mala Africa */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-white mb-1">Mala Africa</h4>
                  <span className="text-blue-400 text-sm font-medium mb-2 block"> Frontend Developer</span>
                  <p className="text-gray-300 text-sm">Led frontend projects, mentored junior developers, and delivered high-quality user interfaces for clients across Africa.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <specialty.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {specialty.title}
              </h3>
              <p className="text-gray-300">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
