import { Link, Mail, Sparkles } from 'lucide-react';
import type { FinalContactViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './FinalContact.module.css';

interface FinalContactProps {
  content: FinalContactViewModel;
}

export const FinalContact = ({ content }: FinalContactProps) => (
  <SectionShell
    id="final-contact"
    title={content.title}
    subtitle={content.subtitle}
    eyebrow={content.eyebrow}
  >
    <div className={styles.contact}>
      <div className={styles.contact__badge}>
        <Sparkles className={styles.contact__badgeIcon} aria-hidden="true" />
        {content.badge}
      </div>

      <p className={styles.contact__thanks}>{content.thanks}</p>
      <p className={styles.contact__motivation}>{content.motivation}</p>
      <p className={styles.contact__prompt}>{content.contactPrompt}</p>

      <div className={styles.contact__links}>
        <a
          className={styles.contact__link}
          href={content.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Perfil de LinkedIn"
        >
          <Link className={styles.contact__linkIcon} aria-hidden="true" />
          {content.linkedinLabel}
        </a>
        <a className={styles.contact__link} href={`mailto:${content.email}`} aria-label="Enviar correo">
          <Mail className={styles.contact__linkIcon} aria-hidden="true" />
          {content.email}
        </a>
      </div>
    </div>
  </SectionShell>
);
