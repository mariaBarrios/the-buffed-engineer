import { motion } from 'framer-motion';
import type { ClientProjectsViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { resolveAssetUrl } from '../../shared/resolveAssetUrl';
import styles from './ClientProjects.module.css';

interface ClientProjectsProps {
  content: ClientProjectsViewModel;
}

export const ClientProjects = ({ content }: ClientProjectsProps) => (
  <SectionShell
    id="client-projects"
    title={content.title}
    subtitle={content.subtitle}
    eyebrow=""
  >
    <ul className={styles.grid}>
      {content.clients.map((client, index) => (
        <motion.li
          key={client.id}
          className={styles.item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
        >
          <div
            className={`${styles.card} ${client.isCurrent ? styles.cardCurrent : ''}`}
          >
            <img
              className={styles.logo}
              src={resolveAssetUrl(client.logoSrc)}
              alt={client.logoAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.li>
      ))}
    </ul>
  </SectionShell>
);
