import { motion } from 'framer-motion';
import { Bot, Route, ShieldCheck, Workflow, Wrench, ChevronDown } from 'lucide-react';
import type { AIRailsContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './AIRails.module.css';

interface AIRailsProps {
  content: AIRailsContent;
}

const ICONS = [Wrench, Bot, Workflow, ShieldCheck, Route];

export const AIRails = ({ content }: AIRailsProps) => (
  <SectionShell id="ai-rails" title={content.title} subtitle={content.subtitle}>
    <div className={styles.grid}>
      {content.entries.map((entry, index) => {
        const Icon = ICONS[index % ICONS.length];

        return (
          <motion.article
            key={entry.title}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.45 }}
          >
            <details className={styles.card__details}>
              <summary className={styles.card__summary}>
                <div className={styles.card__header}>
                  <Icon className={styles.card__icon} />
                  <h3 className={styles.card__title}>{entry.title}</h3>
                </div>
                <ChevronDown className={styles.card__chevron} />
              </summary>

              <div className={styles.card__content}>
                <p className={styles.card__description}>{entry.description}</p>

                <ul className={styles.card__checklist}>
                  {entry.checklist.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {entry.example && (
                  <div className={styles.card__example}>
                    <strong>Ejemplo real:</strong> {entry.example}
                  </div>
                )}

                <p className={styles.card__outcome}>
                  <strong>Resultado:</strong> {entry.outcome}
                </p>
              </div>
            </details>
          </motion.article>
        );
      })}
    </div>
  </SectionShell>
);
