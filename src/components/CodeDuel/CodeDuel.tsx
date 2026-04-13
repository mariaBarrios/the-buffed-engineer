import { motion } from 'framer-motion';
import { Bot, Sword } from 'lucide-react';
import type { CodeDuelContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './CodeDuel.module.css';

interface CodeDuelProps {
  duel: CodeDuelContent;
}

export const CodeDuel = ({ duel }: CodeDuelProps) => (
  <SectionShell id="code-duel" title={duel.title} subtitle={duel.subtitle}>
    <div className={styles.duel}>
      <motion.article
        className={`${styles.duel__panel} ${styles['duel__panel--ai']}`}
        whileHover={{ y: -4 }}
      >
        <header className={styles.duel__header}>
          <Bot size={26} />
          <div>
            <h3>{duel.aiSnippet.label}</h3>
            <p>{duel.aiSnippet.language.toUpperCase()}</p>
          </div>
        </header>
        <pre className={styles.duel__code}>
          <code>{duel.aiSnippet.code}</code>
        </pre>
      </motion.article>

      <motion.article
        className={`${styles.duel__panel} ${styles['duel__panel--architect']}`}
        whileHover={{ y: -4 }}
      >
        <header className={styles.duel__header}>
          <Sword size={26} />
          <div>
            <h3>{duel.architectSnippet.label}</h3>
            <p>{duel.architectSnippet.language.toUpperCase()}</p>
          </div>
        </header>
        <pre className={styles.duel__code}>
          <code>{duel.architectSnippet.code}</code>
        </pre>
      </motion.article>
    </div>
  </SectionShell>
);
