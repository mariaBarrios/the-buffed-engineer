import { motion } from 'framer-motion';
import type { IntroProfileViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { resolveAssetUrl } from '../../shared/resolveAssetUrl';
import styles from './IntroProfile.module.css';

interface IntroProfileProps {
  content: IntroProfileViewModel;
}

export const IntroProfile = ({ content }: IntroProfileProps) => (
  <SectionShell id="intro-profile" title={content.title} eyebrow="">
    <div className={styles.profile}>
      <motion.div
        className={styles.profile__media}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.profile__logoWrap}>
          <img
            className={styles.profile__logo}
            src={resolveAssetUrl(content.companyLogoSrc)}
            alt={content.companyLogoAlt}
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </SectionShell>
);
