import { AlertTriangle, Bug, ShieldAlert, BrainCircuit } from 'lucide-react';
import type { AIFailsViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import styles from './AIFails.module.css';

interface AIFailsProps {
  content: AIFailsViewModel;
}

const ICONS = [BrainCircuit, Bug, ShieldAlert, AlertTriangle];

export const AIFails = ({ content }: AIFailsProps) => (
  <SectionShell
    id="ai-fails"
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
            tone="pink"
            delay={index * 0.15}
          >
            <p className={styles.card__description}>{entry.description}</p>
            <div className={styles.card__example}>
              <strong>Ejemplo:</strong> {entry.example}
            </div>
            <div className={styles.card__solution}>
              <strong>Solución:</strong> {entry.solution}
            </div>
          </ExpandableCard>
        );
      })}
    </div>
  </SectionShell>
);
