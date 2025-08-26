import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, MapPin, Calendar, Mail, Phone, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Sai Tarun' },
    { icon: MapPin, label: 'Location', value: 'Cleveland, OH, USA' },
    { icon: Mail, label: 'Email', value: 'reddytarun223@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (940) 285-0439' },
    { icon: Globe, label: 'Website', value: 'Add your domain or GitHub Pages URL' },
  ]

  const timeline = [
    {
      year: '2025',
      title: 'Freelance Data Engineer',
      company: 'MetricsZero',
      description: 'Ingested logs/metrics/spans from Datadog, New Relic, CloudWatch; normalized formats and de-duped via SQL/Python.',
    },
    {
      year: '2025',
      title: 'Graduate Research Assistant — Data Integrations Engineer',
      company: 'Cleveland State University',
      description: 'ETL workflows (SSIS, Python) integrating academic systems with SQL Server/Snowflake; automated transformations.',
    },
    {
      year: '2023',
      title: 'Independent Data & Integrations Consultant',
      company: 'K2K Hospitality Services (India)',
      description: 'Data pipelines across finance/operations: SQL Server, Snowflake, SSIS/Informatica.',
    },
    {
      year: '2020',
      title: 'Software Engineer (Data & Integrations)',
      company: 'Incentives Software Pvt Ltd (Hyderabad)',
      description: 'Led Oracle → SQL Server/Snowflake migrations; ETL optimizations cut processing time by 35%.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl font-black text-neutral-200/30 rotate-12 select-none">
          DATA
        </div>
        <div className="absolute bottom-20 right-10 text-6xl font-black text-neutral-200/30 -rotate-12 select-none">
          ENGINEER
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-neutral-200/20 select-none">
          SQL
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Passionate data engineer with 3+ years of experience creating innovative data solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Personal Information</h3>
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">{info.label}</p>
                      <p className="font-medium text-neutral-700">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Bio</h3>
              <div className="space-y-4 text-neutral-700">
                <p>
                  I'm a passionate data engineer with expertise in building scalable data pipelines and analytics solutions. 
                  My journey in data engineering began with a curiosity about how data can drive business decisions.
                </p>
                <p>
                  I specialize in SQL Server, Snowflake, and ETL/ELT processes, with a proven track record of 
                  optimizing data workflows and reducing processing times by up to 35%.
                </p>
                <p>
                  Currently pursuing my Master's in Data Science at Cleveland State University while working as a 
                  Graduate Research Assistant, I'm constantly learning and applying new technologies to solve complex data challenges.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Experience Timeline</h3>
              <div className="relative">
                <div className="timeline-line"></div>
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                    className="relative mb-8 ml-12"
                  >
                    <div className="timeline-dot"></div>
                    <div className="glass p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                        <span className="text-sm text-neutral-500">{item.company}</span>
                      </div>
                      <h4 className="text-lg font-bold text-neutral-800 mb-2">{item.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">95%+</div>
              <div className="text-sm text-neutral-500">Stakeholder Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
