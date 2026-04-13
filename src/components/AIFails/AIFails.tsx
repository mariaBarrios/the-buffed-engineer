import { motion } from 'framer-motion';
import { AlertTriangle, Bug, ShieldAlert, BrainCircuit, ChevronDown } from 'lucide-react';
import type { AIFailsContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './AIFails.module.css';

interface AIFailsProps {
  content: AIFailsContent;
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
          <motion.article
            key={entry.title}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <details className={styles.card__details}>
              <summary className={styles.card__summary}>
                <div className={styles.card__header}>
                  <div className={styles.card__iconWrap}>
                    <Icon className={styles.card__icon} />
                  </div>
                  <h3 className={styles.card__title}>{entry.title}</h3>
                </div>
                <ChevronDown className={styles.card__chevron} />
              </summary>
              <div className={styles.card__content}>
                <p className={styles.card__description}>{entry.description}</p>
                <div className={styles.card__example}>
                  <strong>Ejemplo:</strong> {entry.example}
                </div>
                <div className={styles.card__solution}>
                  <strong>Solución:</strong> {entry.solution}
                </div>
              </div>
            </details>
          </motion.article>
        );
      })}
    </div>
  </SectionShell>
);
