import { useState } from 'react';
import { Bot, Eye, EyeOff, Route, ShieldCheck, Workflow, Wrench } from 'lucide-react';
import type { AIRailsViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import styles from './AIRails.module.css';

interface AIRailsProps {
  content: AIRailsViewModel;
}

const ICONS = [Wrench, Bot, Workflow, ShieldCheck, Route];

export const AIRails = ({ content }: AIRailsProps) => {
  const [showDots, setShowDots] = useState(false);

  return (
    <SectionShell
      id="ai-rails"
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
              delay={index * 0.12}
            >
              <p className={styles.card__description}>{entry.description}</p>

              {showDots ? (
                <ul className={styles.card__checklist}>
                  {entry.checklist.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}

              {entry.example ? (
                <div className={styles.card__example}>
                  <strong>Ejemplo real:</strong> {entry.example}
                </div>
              ) : null}

              <p className={styles.card__outcome}>
                <strong>Resultado:</strong> {entry.outcome}
              </p>
            </ExpandableCard>
          );
        })}
      </div>
    </SectionShell>
  );
};
