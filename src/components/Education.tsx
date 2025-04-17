import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const educationData = [
  {
    year: '2022 - Present',
    degree: 'Bachelor of Computer Science',
    school: 'Stanford University',
    description: 'Focusing on Artificial Intelligence and Web Technologies',
    icon: GraduationCap,
    achievements: ['Dean\'s List 2022-2023', 'AI Research Assistant', 'Web Development Lead']
  },
  {
    year: '2020 - 2022',
    degree: 'Associate Degree in Computer Science',
    school: 'Community College',
    description: 'Foundation in programming and computer science principles',
    icon: BookOpen,
    achievements: ['4.0 GPA', 'Programming Club President', 'Hackathon Winner']
  },
  {
    year: '2016 - 2020',
    degree: 'High School Diploma',
    school: 'Tech High School',
    description: 'Advanced placement in Mathematics and Computer Science',
    icon: Award,
    achievements: ['Valedictorian', 'Math Team Captain', 'Coding Competition Winner']
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && timelineRef.current) {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -50 : 50),
        y: 30,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, [inView]);

  return (
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Education Journey
        </motion.h2>
        
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600"
          />
          
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-purple-600">{item.year}</h3>
                  <h4 className="text-lg font-semibold mt-2">{item.degree}</h4>
                  <p className="text-gray-600 mt-1">{item.school}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}