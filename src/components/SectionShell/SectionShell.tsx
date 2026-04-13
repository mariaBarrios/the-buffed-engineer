import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './SectionShell.module.css';

interface SectionShellProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const SectionShell = ({ id, title, subtitle, children }: SectionShellProps) => (
  <motion.section
    id={id}
    className={styles.section}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <header className={styles.section__header}>
      <p className={styles.section__eyebrow}>BUFFED ARCHITECT MODE</p>
      <h2 className={styles.section__title}>{title}</h2>
      <p className={styles.section__subtitle}>{subtitle}</p>
    </header>
    <div className={styles.section__body}>{children}</div>
  </motion.section>
);
