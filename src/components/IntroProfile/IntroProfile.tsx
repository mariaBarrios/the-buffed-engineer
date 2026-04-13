import { motion } from 'framer-motion';
import type { IntroProfileContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './IntroProfile.module.css';

interface IntroProfileProps {
  content: IntroProfileContent;
}

export const IntroProfile = ({ content }: IntroProfileProps) => (
  <SectionShell id="intro-profile">
    <div className={styles.profile}>
      <motion.div
        className={styles.profile__media}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <figure className={styles.profile__photoCard}>
          <img
            className={styles.profile__photo}
            src={content.photoSrc}
            alt={content.photoAlt}
            loading="lazy"
          />
        </figure>
        <div className={styles.profile__logoWrap}>
          <img
            className={styles.profile__logo}
            src={content.companyLogoSrc}
            alt={content.companyLogoAlt}
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.profile__info}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className={styles.profile__name}>
          {content.nameLead}
          {content.nameLead ? (
            <span className={styles.profile__nameAccent}>{content.name}</span>
          ) : (
            content.name
          )}
        </p>
        <p className={styles.profile__intro}>{content.intro}</p>
        <p className={styles.profile__experience}>{content.experience}</p>
      </motion.div>
    </div>
  </SectionShell>
);
