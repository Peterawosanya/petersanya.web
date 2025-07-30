import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Mail, Phone, FileText } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);

  const buttonVariants = {
    hover: { 
      scale: 1.1, 
      boxShadow: "0px 0px 8px rgba(255,255,255,0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const profileVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring" 
      }
    },
    hover: { 
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      {/* Enhanced Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        <img
          src="/pete 2.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70"
          animate={{ 
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left md:flex-1"
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <TypeAnimation
                sequence={["Hi, I'm Peter!", 2000, "Welcome!", 2000]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-white text-sm font-medium"
              />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Peter Awosanya
            </motion.h1>

            <div className="text-xl md:text-3xl text-white/90 mb-8 h-[60px] font-light">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Enthusiast',
                  2000,
                  'Math-Minded Coder',
                  2000,
                  'Problem Solver',
                  2000,
                  'Creative Developer',
                  2000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="inline-block px-2"
              />
            </div>

            <motion.p
              className="text-lg text-white/80 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              With a BSc in Mathematical Science from Olabisi Onabanjo University and hands-on expertise in frontend development using React.js and Tailwind CSS, I bridge the gap between technical complexity and user-centric design.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { Icon: Mail, href: 'mailto:petersanya45@gmail.com', label: 'Email' },
                { Icon: Phone, href: 'tel:+2348055188240', label: 'Phone' },
                { Icon: Phone, href: 'https://wa.link/rpgpvi', label: 'WhatsApp' },
                { Icon: Github, href: 'https://github.com/Peterawosanya', label: 'GitHub' },
                { Icon: FileText, href: 'My n resume .pdf', label: 'Download resume', download: true },
              ].map(({ Icon, href, label, download }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white"
                  {...(download ? { download: true } : {})}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={profileVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-white/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
              <img
                src="/pete 3.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
