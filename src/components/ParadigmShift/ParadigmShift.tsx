import { Brain, Database, Map, Server, Workflow, Zap } from 'lucide-react';
import type { ParadigmShiftViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import styles from './ParadigmShift.module.css';

interface ParadigmShiftProps {
  content: ParadigmShiftViewModel;
}

const ICONS = [Zap, Map, Workflow, Server, Database, Brain];

export const ParadigmShift = ({ content }: ParadigmShiftProps) => (
  <SectionShell
    id="paradigm-shift"
    title={content.title}
    subtitle={content.subtitle}
  >
    <div className={styles.grid}>
      {content.entries.map((entry, index) => {
        const Icon = ICONS[index % ICONS.length];

        return (
          <ExpandableCard
            key={entry.id}
            title={entry.title}
            icon={<Icon className={styles.card__icon} />}
            tone="green"
            delay={index * 0.1}
          >
            <p className={styles.card__description}>{entry.description}</p>

            <ul className={styles.card__checklist}>
              {entry.checklist.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <p className={styles.card__outcome}>
              <strong>Resultado:</strong> {entry.outcome}
            </p>
          </ExpandableCard>
        );
      })}
    </div>
  </SectionShell>
);
