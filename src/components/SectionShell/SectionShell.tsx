import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './SectionShell.module.css';

interface SectionShellProps {
  id: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  headerAction?: ReactNode;
  children: ReactNode;
}

export const SectionShell = ({
  id,
  title = '',
  subtitle = '',
  eyebrow = 'BUFFED ENGINEER MODE',
  headerAction,
  children,
}: SectionShellProps) => {
  const showHeader = title.trim().length > 0;
  const showEyebrow = eyebrow.trim().length > 0;

  return (
    <motion.section
      id={id}
      className={styles.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {showHeader ? (
        <header className={styles.section__header}>
          {showEyebrow || headerAction ? (
            <div className={styles.section__headerTop}>
              {showEyebrow ? (
                <p className={styles.section__eyebrow}>{eyebrow}</p>
              ) : (
                <span />
              )}
              {headerAction ? (
                <div className={styles.section__headerAction}>{headerAction}</div>
              ) : null}
            </div>
          ) : null}
          <h2 className={styles.section__title}>{title}</h2>
          {subtitle.trim() ? (
            <p className={styles.section__subtitle}>{subtitle}</p>
          ) : null}
        </header>
      ) : null}
      <div className={styles.section__body}>{children}</div>
    </motion.section>
  );
};
