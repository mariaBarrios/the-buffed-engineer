import { motion } from 'framer-motion';
import type { TimelineContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './XpTimeline.module.css';

interface XpTimelineProps {
  timeline: TimelineContent;
}

export const XpTimeline = ({ timeline }: XpTimelineProps) => (
  <SectionShell id="xp-timeline" title={timeline.title} subtitle={timeline.subtitle}>
    <div className={styles.timeline}>
      <div className={styles.timeline__line} />
      {timeline.entries.map((entry, index) => (
        <motion.article
          key={`${entry.year}-${entry.title}`}
          className={styles.timeline__item}
          initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <span className={styles.timeline__year}>{entry.year}</span>
          <h3 className={styles.timeline__title}>{entry.title}</h3>
          <p className={styles.timeline__stack}>{entry.stack}</p>
          <p className={styles.timeline__insight}>{entry.insight}</p>
        </motion.article>
      ))}
    </div>
  </SectionShell>
);
