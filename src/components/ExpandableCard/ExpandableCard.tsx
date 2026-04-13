import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './ExpandableCard.module.css';

interface ExpandableCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
  tone?: 'green' | 'pink';
  className?: string;
}

export const ExpandableCard = ({
  title,
  icon,
  children,
  delay = 0,
  tone = 'green',
  className = '',
}: ExpandableCardProps) => {
  const toneClass = tone === 'pink' ? styles['card--pink'] : styles['card--green'];

  return (
    <motion.article
      className={`${styles.card} ${toneClass} ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
    >
      <details className={styles.card__details}>
        <summary className={styles.card__summary}>
          <div className={styles.card__header}>
            <span className={styles.card__iconWrap}>{icon}</span>
            <h3 className={styles.card__title}>{title}</h3>
          </div>
          <ChevronDown className={styles.card__chevron} />
        </summary>
        <div className={styles.card__content}>{children}</div>
      </details>
    </motion.article>
  );
};
