import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'December 2023',
    credentialId: 'AWS-123456',
    featured: true,
    skills: ['Cloud Architecture', 'AWS Services', 'Security']
  },
  {
    title: 'Meta Frontend Developer',
    issuer: 'Meta',
    date: 'October 2023',
    credentialId: 'META-789012',
    featured: true,
    skills: ['React', 'JavaScript', 'Web Development']
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google',
    date: 'August 2023',
    credentialId: 'GOOGLE-345678',
    featured: false,
    skills: ['Data Analysis', 'Python', 'SQL']
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    date: 'June 2023',
    credentialId: 'STAN-901234',
    featured: false,
    skills: ['Machine Learning', 'Deep Learning', 'Python']
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" id="certifications">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              {cert.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs px-4 py-1 rounded-bl-lg">
                    Featured
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-600"
                  >
                    <Award className="w-8 h-8" />
                  </motion.div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-4 pt-4 border-t border-gray-100"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">ID: {cert.credentialId}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-700"
                    >
                      Verify <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}