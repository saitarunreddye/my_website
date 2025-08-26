import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Database, Cloud, BarChart3, Code, Settings, Shield } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: Database,
      title: 'Databases',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'SQL Server', level: 88 },
        { name: 'Snowflake', level: 85 },
        { name: 'Oracle', level: 82 },
        { name: 'PostgreSQL', level: 80 },
      ]
    },
    {
      icon: Cloud,
      title: 'ETL/Integrations',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SSIS', level: 80 },
        { name: 'Informatica', level: 75 },
        { name: 'Boomi', level: 70 },
        { name: 'APIs', level: 85 },
      ]
    },
    {
      icon: BarChart3,
      title: 'BI & Reporting',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Tableau', level: 80 },
        { name: 'SSRS', level: 75 },
      ]
    },
    {
      icon: Shield,
      title: 'Practices',
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Data Governance', level: 75 },
        { name: 'Compliance', level: 70 },
        { name: 'Agile/Scrum', level: 80 },
      ]
    },
    {
      icon: Settings,
      title: 'Other',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'On Call Support', level: 75 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Migration Strategy', level: 80 },
        { name: 'Collaboration', level: 85 },
      ]
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-7xl font-black text-neutral-200/30 rotate-12 select-none">
          SKILLS
        </div>
        <div className="absolute bottom-20 right-10 text-6xl font-black text-neutral-200/30 -rotate-12 select-none">
          EXPERTISE
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-neutral-200/20 select-none">
          TECH
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
            <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Comprehensive expertise in data engineering, analytics, and cloud technologies
          </motion.p>
        </motion.div>

        <div className="card-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.8 }}
              className="skill-card"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                      <span className="text-sm text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Key Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">90%</div>
                <div className="text-sm text-neutral-600">SQL Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">85%</div>
                <div className="text-sm text-neutral-600">Data Pipeline Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">80%</div>
                <div className="text-sm text-neutral-600">Cloud Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
