import { motion } from 'framer-motion';
import type { HeroContent } from '../../domain/entities/TalkContent';
import styles from './HeroUnlock.module.css';

interface HeroUnlockProps {
  hero: HeroContent;
  isUnlocked: boolean;
  isUnlocking: boolean;
  unlockProgress: number;
  onUnlock: () => void;
}

export const HeroUnlock = ({
  hero,
  isUnlocked,
  isUnlocking,
  unlockProgress,
  onUnlock,
}: HeroUnlockProps) => (
  <section className={styles.hero}>
    <div className={styles.hero__overlay} />
    <motion.div
      className={styles.hero__content}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p className={styles.hero__tag}>Loot Box Experience</p>
      <h1 className={styles.hero__title}>{hero.title}</h1>
      <p className={styles.hero__subtitle}>{hero.subtitle}</p>

      <motion.button
        type="button"
        className={styles.hero__button}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        disabled={isUnlocking || isUnlocked}
        onClick={onUnlock}
      >
        {isUnlocked ? 'LEVEL UNLOCKED' : hero.callToAction}
      </motion.button>

      <div className={styles.hero__progressTrack} aria-hidden={!isUnlocking}>
        <div className={styles.hero__progressFill} style={{ width: `${unlockProgress}%` }} />
      </div>

      <p className={styles.hero__status}>
        {isUnlocked
          ? hero.unlockedLabel
          : isUnlocking
            ? `Unlocking... ${unlockProgress}%`
            : 'Press the button to reveal the full talk support web.'}
      </p>
    </motion.div>
  </section>
);
