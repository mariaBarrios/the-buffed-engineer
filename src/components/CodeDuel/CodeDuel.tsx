import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sword } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CodeDuelViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './CodeDuel.module.css';

interface CodeDuelProps {
  duel: CodeDuelViewModel;
}

const syntaxContainerStyle: CSSProperties = {
  margin: 0,
  padding: '0.9rem',
  borderRadius: '0.7rem',
  background: 'rgb(2 4 5 / 92%)',
  fontSize: '0.92rem',
  lineHeight: 1.55,
};

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
        <SyntaxHighlighter
          language={duel.aiSnippet.language}
          style={vscDarkPlus}
          className={styles.duel__code}
          customStyle={syntaxContainerStyle}
          wrapLongLines
          codeTagProps={{ style: { fontFamily: 'var(--font-mono)' } }}
        >
          {duel.aiSnippet.code}
        </SyntaxHighlighter>
      </motion.article>

      <motion.article
        className={`${styles.duel__panel} ${styles['duel__panel--architect']}`}
        whileHover={{ y: -4 }}
      >
        <details className={styles.duel__details}>
          <summary className={styles.duel__summary}>
            <Sword size={26} />
            <div>
              <h3>{duel.architectSnippet.label}</h3>
              <p>{duel.architectSnippet.language.toUpperCase()}</p>
            </div>
          </summary>
          <SyntaxHighlighter
            language={duel.architectSnippet.language}
            style={vscDarkPlus}
            className={styles.duel__code}
            customStyle={syntaxContainerStyle}
            wrapLongLines
            codeTagProps={{ style: { fontFamily: 'var(--font-mono)' } }}
          >
            {duel.architectSnippet.code}
          </SyntaxHighlighter>
        </details>
      </motion.article>
    </div>
  </SectionShell>
);
