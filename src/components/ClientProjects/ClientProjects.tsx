import { motion } from 'framer-motion';
import type { ClientProjectsContent } from '../../domain/entities/TalkContent';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './ClientProjects.module.css';

interface ClientProjectsProps {
  content: ClientProjectsContent;
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
              src={client.logoSrc}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.li>
      ))}
    </ul>
  </SectionShell>
);
