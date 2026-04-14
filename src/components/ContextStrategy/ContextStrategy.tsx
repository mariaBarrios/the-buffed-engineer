import { FileText, Layers, MessageSquare } from 'lucide-react';
import type { ContextStrategyViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './ContextStrategy.module.css';

interface ContextStrategyProps {
  content: ContextStrategyViewModel;
}

const ICONS = [Layers, FileText, MessageSquare];

export const ContextStrategy = ({ content }: ContextStrategyProps) => (
  <SectionShell id="context-strategy" title={content.title} subtitle={content.subtitle}>
    <div className={styles.grid}>
      {content.layers.map((layer, index) => {
        const Icon = ICONS[index % ICONS.length];

        return (
          <ExpandableCard
            key={layer.id}
            title={layer.title}
            icon={<Icon className={styles.card__icon} />}
            delay={index * 0.1}
          >
            <p className={styles.card__description}>{layer.objective}</p>
            <p className={styles.card__meta}>
              <strong>Cuándo:</strong> {layer.useWhen}
            </p>
            <p className={styles.card__meta}>
              <strong>Dónde:</strong> <code>{layer.artifact}</code>
            </p>
            <p className={styles.card__example}>
              <strong>Ejemplo:</strong> {layer.example}
            </p>
          </ExpandableCard>
        );
      })}
    </div>
  </SectionShell>
);
