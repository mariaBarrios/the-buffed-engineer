import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Atom, Bot, BriefcaseBusiness, CircleDot, MonitorSmartphone } from 'lucide-react';
import type { TimelineViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './XpTimeline.module.css';

interface XpTimelineProps {
  timeline: TimelineViewModel;
}

const STAGE_ICONS: LucideIcon[] = [BriefcaseBusiness, MonitorSmartphone, Atom, Bot];

export const XpTimeline = ({ timeline }: XpTimelineProps) => (
  <SectionShell id="xp-timeline" title={timeline.title} subtitle={timeline.subtitle} eyebrow="">
    <div className={styles.timeline}>
      <div className={styles.timeline__line} />
      {timeline.entries.map((entry, index) => {
        const Icon = STAGE_ICONS[index] ?? CircleDot;

        return (
          <motion.article
            key={`${entry.year}-${entry.title}`}
            className={styles.timeline__item}
            initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className={styles.timeline__heading}>
              <span className={styles.timeline__iconWrap} aria-hidden="true">
                <Icon className={styles.timeline__icon} />
              </span>
              <div className={styles.timeline__content}>
                <span className={styles.timeline__year}>{entry.year}</span>
                <h3 className={styles.timeline__title}>{entry.title}</h3>
                <p className={styles.timeline__stack}>{entry.stack}</p>
                <p className={styles.timeline__insight}>{entry.insight}</p>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  </SectionShell>
);
