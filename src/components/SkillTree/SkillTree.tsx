import { motion } from 'framer-motion';
import { Gauge, Network, ShieldCheck } from 'lucide-react';
import type { SkillPillarViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './SkillTree.module.css';

interface SkillTreeProps {
  pillars: SkillPillarViewModel[];
}

const PILLAR_ICON = {
  stability: ShieldCheck,
  scalability: Network,
  performance: Gauge,
} as const;

export const SkillTree = ({ pillars }: SkillTreeProps) => (
  <SectionShell
    id="skill-tree"
    title="The Skill Tree"
    subtitle="Stability, Scalability y Performance como build principal."
  >
    <div className={styles.tree}>
      {pillars.map((pillar, index) => {
        const Icon = PILLAR_ICON[pillar.id];

        return (
          <motion.article
            key={pillar.id}
            className={styles.tree__node}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.4 }}
          >
            <div className={styles.tree__iconWrap}>
              <Icon className={styles.tree__icon} />
            </div>
            <h3 className={styles.tree__title}>{pillar.title}</h3>
            <p className={styles.tree__description}>{pillar.description}</p>
          </motion.article>
        );
      })}
    </div>
  </SectionShell>
);
