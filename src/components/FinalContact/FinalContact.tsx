import { Sparkles } from 'lucide-react';
import type { FinalContactViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './FinalContact.module.css';

interface FinalContactProps {
  content: FinalContactViewModel;
}

export const FinalContact = ({ content }: FinalContactProps) => (
  <SectionShell
    id="final-contact"
  >
    <div className={styles.contact}>
      <div className={styles.contact__badge}>
        <Sparkles className={styles.contact__badgeIcon} aria-hidden="true" />
        {content.badge}
      </div>

      <p className={styles.contact__thanks}>{content.thanks}</p>
      <p className={styles.contact__motivation}>{content.motivation}</p>
      {content.contactPrompt && (
        <p className={styles.contact__prompt}>{content.contactPrompt}</p>
      )}
    </div>
  </SectionShell>
);
