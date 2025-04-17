import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A smart task management application that uses machine learning to prioritize and categorize tasks automatically.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'E-Learning Platform',
    description: 'An interactive learning platform with real-time collaboration features and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A comprehensive dashboard for monitoring and controlling IoT devices in real-time.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MQTT', 'Chart.js'],
    github: 'https://github.com',
    featured: false
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ rotate: -15 }}
                      whileHover={{ rotate: 0 }}
                      className="bg-yellow-400 text-yellow-900 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Star className="w-3 h-3" /> Featured
                    </motion.div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Folder className="w-5 h-5 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-purple-600"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-600 hover:text-purple-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}