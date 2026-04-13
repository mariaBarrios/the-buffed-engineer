import { BookOpen, Code2, Layers, TestTube2, Users } from 'lucide-react';
import type { AIEngineeringFundamentalsViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import styles from './AIEngineeringFundamentals.module.css';

interface AIEngineeringFundamentalsProps {
  content: AIEngineeringFundamentalsViewModel;
}

const ICONS = [Layers, TestTube2, BookOpen, Code2, Users];

export const AIEngineeringFundamentals = ({ content }: AIEngineeringFundamentalsProps) => (
  <SectionShell id="ai-engineering-fundamentals" title={content.title} subtitle={content.subtitle}>
    <div className={styles.grid}>
      {content.entries.map((entry, index) => {
        const Icon = ICONS[index % ICONS.length];

        return (
          <ExpandableCard
            key={entry.id}
            title={entry.title}
            icon={<Icon className={styles.card__icon} />}
            tone="pink"
            delay={index * 0.1}
          >
            <p className={styles.card__description}>{entry.description}</p>

            <ul className={styles.card__checklist}>
              {entry.checklist.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <p className={styles.card__outcome}>
              <strong>Con la IA:</strong> {entry.outcome}
            </p>
          </ExpandableCard>
        );
      })}
    </div>
  </SectionShell>
);
