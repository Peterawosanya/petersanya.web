
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaPython, FaDocker, FaGithub, FaNpm, FaSass, FaLinux, FaAws, FaDatabase, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiJest, SiVercel, SiNetlify, SiAdobephotoshop, SiAdobexd, SiGraphql, SiPrisma, SiGo, SiRust, SiDjango, SiSharp } from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend',
    description: 'Building interactive, modern UIs and SPAs.',
    skills: [
      { name: 'React', icon: FaReact, level: 'Advanced', experience: '3+ year' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Proficient', experience: '2+ year' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'Proficient', experience: '1+ year' },
      { name: 'Redux', icon: SiRedux, level: 'Proficient', experience: '2+ year' },
      { name: 'HTML5', icon: FaHtml5, level: 'Advanced', experience: '3+ year' },
      { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced', experience: '3+ year' },
      { name: 'Sass', icon: FaSass, level: 'Proficient', experience: '2+ year' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Proficient', experience: '2+ year' },
      { name: 'JavaScript', icon: FaJs, level: 'Advanced', experience: '3+ year' },
    ],
  },
  {
    category: 'Exploring Backend Technologies',
    description: 'Currently learning and building foundational knowledge in backend development, APIs, and databases.',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 'Learning', experience: '<1 year' },
      { name: 'Express', icon: SiExpress, level: 'Learning', experience: '<1 year' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Learning', experience: '<1 year' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Learning', experience: '<1 year' },
      { name: 'Prisma', icon: SiPrisma, level: 'Learning', experience: '<1 year' },
      { name: 'GraphQL', icon: SiGraphql, level: 'Learning', experience: '<1 year' },
      { name: 'Jest', icon: SiJest, level: 'Learning', experience: '<1 year' },
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Development, deployment, and productivity tools.',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 'Proficient', experience: '3+ year' },
      { name: 'GitHub', icon: FaGithub, level: 'Proficient', experience: '3+ year' },
      { name: 'NPM', icon: FaNpm, level: 'Proficient', experience: '3+ year' },
      { name: 'Vercel', icon: SiVercel, level: 'Proficient', experience: '2+ year' },
      { name: 'Netlify', icon: SiNetlify, level: 'Proficient', experience: '2+ year' },
      { name: 'Linux', icon: FaLinux, level: 'Familiar', experience: '1+ year' },
      { name: 'Docker', icon: FaDocker, level: 'Familiar', experience: '<1 year' },
      { name: 'AWS', icon: FaAws, level: 'Familiar', experience: '<1 year' },
    ],
  },
  {
    category: 'Design',
    description: 'UI/UX, prototyping, and design systems.',
    skills: [
      { name: 'Figma', icon: FaFigma, level: 'Proficient', experience: '2+ year' },
      { name: 'Adobe XD', icon: SiAdobexd, level: 'Familiar', experience: '<1 year' },
      { name: 'Photoshop', icon: SiAdobephotoshop, level: 'Familiar', experience: '<1 year' },
      { name: 'UI/UX Design', icon: null, level: 'Familiar', experience: '1+ year' },
    ],
  },
];

const currentlyLearning = [
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Go', icon: SiGo },
  { name: 'Rust', icon: SiRust },
  { name: 'Django', icon: SiDjango },
  { name: 'Python', icon: FaPython },
  { name: 'C#', icon: SiSharp },
  { name: 'Java', icon: FaJava },
  { name: 'Database', icon: FaDatabase },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis, plus what I'm currently learning to stay ahead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-semibold text-blue-700 dark:text-blue-400">{cat.category}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cat.description}</p>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <motion.div
                    whileHover={{ scale: 1.08, boxShadow: '0 4px 24px rgba(59,130,246,0.15)' }}
                    key={skill.name}
                    className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg px-3 py-2 shadow border border-gray-200 dark:border-gray-600 min-w-[100px] transition-transform cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    {skill.icon && <span className="text-2xl mb-1 text-blue-600 dark:text-blue-400"><skill.icon /></span>}
                    <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">{skill.level}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{skill.experience}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2 text-center">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {currentlyLearning.map((item) => (
              <div key={item.name} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-700 dark:text-blue-300 text-sm shadow">
                {item.icon && <span className="text-lg"><item.icon /></span>}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;