import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import type { HeroContent } from '../../domain/entities/TalkContent';
import styles from './HeroUnlock.module.css';

interface HeroUnlockProps {
  hero: HeroContent;
}

export const HeroUnlock = ({ hero }: HeroUnlockProps) => (
  <section className={styles.hero}>
    <div className={styles.hero__overlay} />
    <motion.div
      className={styles.hero__content}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.hero__title}>{hero.title}</h1>
      <p className={styles.hero__subtitle}>{hero.subtitle}</p>
      <div className={styles.hero__visual} aria-hidden="true">
        <span className={styles.hero__chip}>
          <Sparkles className={styles.hero__chipIcon} />
          AI POWERED
        </span>
        <span className={styles.hero__chip}>
          <Bot className={styles.hero__chipIcon} />
          HUMAN GUIDED
        </span>
      </div>
    </motion.div>
  </section>
);
