import { useState } from 'react';
import { BookOpen, Code2, Eye, EyeOff, Layers, TestTube2, Users } from 'lucide-react';
import type { AIEngineeringFundamentalsViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import styles from './AIEngineeringFundamentals.module.css';

interface AIEngineeringFundamentalsProps {
  content: AIEngineeringFundamentalsViewModel;
}

const ICONS = [Layers, TestTube2, BookOpen, Code2, Users];

export const AIEngineeringFundamentals = ({ content }: AIEngineeringFundamentalsProps) => {
  const [showDots, setShowDots] = useState(false);

  return (
    <SectionShell
      id="ai-engineering-fundamentals"
      title={content.title}
      subtitle={content.subtitle}
      headerAction={
        <button
          type="button"
          className={styles.sectionToggle}
          onClick={() => setShowDots((currentValue) => !currentValue)}
          aria-label={showDots ? 'Ocultar dots' : 'Mostrar dots'}
          title={showDots ? 'Ocultar dots' : 'Mostrar dots'}
        >
          {showDots ? (
            <EyeOff className={styles.sectionToggle__icon} />
          ) : (
            <Eye className={styles.sectionToggle__icon} />
          )}
        </button>
      }
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
              delay={index * 0.1}
            >
              <p className={styles.card__description}>{entry.description}</p>

              {showDots ? (
                <ul className={styles.card__checklist}>
                  {entry.checklist.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}

              <p className={styles.card__outcome}>
                <strong>Con la IA:</strong> {entry.outcome}
              </p>
            </ExpandableCard>
          );
        })}
      </div>
    </SectionShell>
  );
};
