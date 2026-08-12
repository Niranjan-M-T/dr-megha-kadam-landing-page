'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import services from '@/data/services'
import ServiceIcon from './ServiceIcon'

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServicesGrid({ withHead = false }) {
  return (
    <section className="section services" id="services">
      <div className="container">
        {withHead && (
          <div className="section-head">
            <span className="eyebrow">How she can help</span>
            <h2>
              Care for every age &amp; <em>every stage</em>
            </h2>
            <p>Specialised pediatric and neonatal services, all under one gentle roof.</p>
          </div>
        )}

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {services.map((s) => (
            <motion.article
              className="service-card"
              key={s.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <Link
                href={`/services/${s.slug}/`}
                className="service-card-link"
                data-conversion-name="service_detail_click"
                data-conversion-category="services_grid"
                data-conversion-label={s.name}
              >
                <span className={`service-icon ${s.tint}`}>
                  <ServiceIcon name={s.icon} size={24} strokeWidth={1.7} />
                </span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="learn-more">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
