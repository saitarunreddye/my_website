import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: 'Freelance Data Engineer',
      company: 'MetricsZero',
      location: 'Remote',
      period: 'Jan 2025 - Present',
      description: 'Ingested logs/metrics/spans from Datadog, New Relic, CloudWatch; normalized formats and de-duped via SQL/Python.',
      technologies: ['Python', 'SQL', 'Snowflake', 'Redshift', 'BigQuery', 'CloudWatch'],
      achievements: [
        'Built warehouses in Snowflake/Redshift/BigQuery; modeled fact/dim tables for cost reporting',
        'Automated cost checks (unused custom metrics, high-cardinality tags, redundant spans) and daily dashboard updates',
        'Added data-quality gates (row counts, null checks, billing reconciliation)',
        'Centralized observability data for cost optimization and performance monitoring'
      ],
      companyUrl: null,
      featured: true,
    },
    {
      id: 2,
      title: 'Graduate Research Assistant — Data Integrations Engineer',
      company: 'Cleveland State University',
      location: 'Cleveland, OH',
      period: 'Jan 2025 - May 2025',
      description: 'ETL workflows (SSIS, Python) integrating academic systems with SQL Server/Snowflake; automated transformations.',
      technologies: ['SSIS', 'Python', 'SQL Server', 'Snowflake', 'Tableau', 'SSRS'],
      achievements: [
        'Validation & reconciliation improving trust in institutional reporting',
        'Tableau/SSRS dashboards for faculty/administration; governance controls aligned to policy',
        'Automated data transformations reducing manual processing time',
        'Implemented data quality checks and validation workflows'
      ],
      companyUrl: 'https://csuohio.edu',
      featured: false,
    },
    {
      id: 3,
      title: 'Independent Data & Integrations Consultant',
      company: 'K2K Hospitality Services (India)',
      location: 'India',
      period: 'Jul 2023 - Dec 2024',
      description: 'Data pipelines across finance/operations: SQL Server, Snowflake, SSIS/Informatica.',
      technologies: ['SQL Server', 'Snowflake', 'SSIS', 'Informatica', 'Tableau'],
      achievements: [
        'Tableau dashboards for KPIs & compliance; iterative stakeholder requirements',
        'SQL tuning and process improvements reduced reporting delays by 30%',
        'Implemented automated data pipelines for finance and operations',
        'Enhanced data quality and reporting accuracy across business units'
      ],
      companyUrl: null,
      featured: false,
    },
    {
      id: 4,
      title: 'Software Engineer (Data & Integrations)',
      company: 'Incentives Software Pvt Ltd (Hyderabad)',
      location: 'Hyderabad, India',
      period: 'Apr 2020 - May 2023',
      description: 'Led Oracle → SQL Server/Snowflake migrations; ETL optimizations cut processing time by 35%.',
      technologies: ['Oracle', 'SQL Server', 'Snowflake', 'SSIS', 'Informatica', 'Tableau', 'Salesforce'],
      achievements: [
        'Tuned DBs for transactional/reporting workloads; delivered executive KPI/compliance dashboards',
        'Improved Salesforce reporting via better data flows; mentored juniors on SQL/ETL best practices',
        'Led successful migration from Oracle to SQL Server/Snowflake',
        'Reduced ETL processing time by 35% through optimization and tuning'
      ],
      companyUrl: null,
      featured: false,
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-7xl font-black text-neutral-200/30 rotate-12 select-none">
          EXPERIENCE
        </div>
        <div className="absolute bottom-20 right-10 text-6xl font-black text-neutral-200/30 -rotate-12 select-none">
          CAREER
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-neutral-200/20 select-none">
          WORK
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            A journey through data engineering roles, delivering impactful solutions and driving business value
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="experience-card"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column - Basic Info */}
                <div className="lg:w-1/3 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-neutral-600 mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-neutral-500 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    {experience.featured && (
                      <span className="px-3 py-1 bg-accent-100 text-accent-800 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-neutral-700 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.2 + achievementIndex * 0.1, duration: 0.5 }}
                          className="flex items-start space-x-2 text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Career Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <div className="text-sm text-neutral-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">35%</div>
                <div className="text-sm text-neutral-600">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-sm text-neutral-600">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
