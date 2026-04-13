import type { ManifestoContent } from '../../domain/entities/TalkContent';
import { useTerminalTyper } from '../../hooks/useTerminalTyper';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './TerminalManifesto.module.css';

interface TerminalManifestoProps {
  manifesto: ManifestoContent;
  active: boolean;
}

export const TerminalManifesto = ({ manifesto, active }: TerminalManifestoProps) => {
  const { typedText, isFinished } = useTerminalTyper(manifesto.lines, active);

  return (
    <SectionShell id="terminal-manifesto" title={manifesto.title} subtitle="Principios para trabajar mejor con IA.">
      <article className={styles.terminal}>
        <header className={styles.terminal__header}>
          <span className={styles.terminal__dot} />
          <span className={styles.terminal__dot} />
          <span className={styles.terminal__dot} />
          <p className={styles.terminal__path}>/usr/architect/manifesto</p>
        </header>

        <div className={styles.terminal__body}>
          <p className={styles.terminal__prompt}>
            <span className={styles['terminal__prompt--accent']}>architect@buffed</span>:~$ {manifesto.prompt}
          </p>
          <pre className={styles.terminal__output}>
            {typedText}
            {!isFinished ? <span className={styles.terminal__cursor}>█</span> : null}
          </pre>
        </div>
      </article>
    </SectionShell>
  );
};
