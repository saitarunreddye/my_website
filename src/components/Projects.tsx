import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Database, BarChart3, Code } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'data', label: 'Data Engineering' },
    { id: 'analytics', label: 'Analytics & BI' },
    { id: 'etl', label: 'ETL/ELT' },
    { id: 'performance', label: 'Performance Tuning' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Customer Data Transformation in Snowflake',
      description: 'Built SQL pipelines to clean and standardize customer data, reducing duplicates by 35% and improving reporting accuracy.',
      image: '/api/placeholder/400/300',
      category: 'data',
      technologies: ['Snowflake', 'SQL', 'Data Quality', 'ETL'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      icon: Database,
    },
    {
      id: 2,
      title: 'ETL Pipeline for Marketing Analytics',
      description: 'Consolidated sales and campaign data in Snowflake, reducing manual effort by 40% and enabling ROI dashboards for business teams.',
      image: '/api/placeholder/400/300',
      category: 'etl',
      technologies: ['Snowflake', 'ETL', 'SQL', 'Tableau', 'ROI Analytics'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      icon: Code,
    },
    {
      id: 3,
      title: 'Query Performance Tuning',
      description: 'Optimized BI SQL queries (joins, CTEs, window functions), cutting report runtime by up to 50% and improving stakeholder satisfaction.',
      image: '/api/placeholder/400/300',
      category: 'performance',
      technologies: ['SQL', 'Performance Tuning', 'BI', 'Query Optimization'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      icon: BarChart3,
    },
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-7xl font-black text-neutral-200/30 rotate-12 select-none">
          PROJECTS
        </div>
        <div className="absolute bottom-20 right-10 text-6xl font-black text-neutral-200/30 -rotate-12 select-none">
          SOLUTIONS
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-neutral-200/20 select-none">
          DATA
        </div>
      </div>
      
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Data engineering solutions that transform raw data into actionable insights
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-medium'
                  : 'bg-white/80 text-neutral-600 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="card-grid-2"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="project-card group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Collaborate?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new data engineering challenges. Let's discuss how we can transform your data into powerful insights.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
