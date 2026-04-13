import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Bot, BrainCircuit, Gauge, GitBranch, TestTube2 } from 'lucide-react';
import type { ManifestoContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './TerminalManifesto.module.css';

interface TerminalManifestoProps {
  manifesto: ManifestoContent;
  active: boolean;
}

const PRINCIPLE_ICONS: LucideIcon[] = [BrainCircuit, GitBranch, TestTube2, Gauge, Bot];

const normalizePrinciple = (line: string) => line.replace(/^\d+\)\s*/, '').trim();

export const TerminalManifesto = ({ manifesto, active }: TerminalManifestoProps) => {
  const principles = manifesto.lines.map(normalizePrinciple);

  return (
    <SectionShell id="terminal-manifesto" title={manifesto.title} subtitle="Principios para trabajar mejor con IA.">
      <div className={styles.grid}>
        {principles.map((principle, index) => {
          const Icon = PRINCIPLE_ICONS[index % PRINCIPLE_ICONS.length];

          return (
            <motion.article
              key={`${principle}-${index}`}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: active ? index * 0.08 : 0, duration: 0.35 }}
            >
              <div className={styles.card__row}>
                <div className={styles.card__content}>
                  <Icon className={styles.card__icon} />
                  <p className={styles.card__text}>{principle}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
};
