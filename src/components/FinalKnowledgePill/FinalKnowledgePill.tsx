import type { FinalSlideBlockViewModel, FinalSlideViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import styles from './FinalKnowledgePill.module.css';

interface FinalKnowledgePillProps {
  content: FinalSlideViewModel;
}

const Block = ({ block }: { block: FinalSlideBlockViewModel }) => (
  <article className={styles.block}>
    <h3 className={styles.block__title}>{block.title}</h3>
    <ul className={styles.block__list}>
      {block.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </article>
);

export const FinalKnowledgePill = ({ content }: FinalKnowledgePillProps) => (
  <SectionShell id="final-pill" title={content.title} subtitle={content.subtitle} eyebrow="PILDORA FINAL">
    <div className={styles.grid}>
      <Block block={content.before} />
      <Block block={content.decisions} />
      <Block block={content.result} />
    </div>

    <div className={styles.references}>
      <p className={styles.references__title}>Backlog real enlazado:</p>
      <ul className={styles.references__list}>
        {content.references.map((reference) => (
          <li key={reference.url}>
            <a href={reference.url} target="_blank" rel="noreferrer">
              {reference.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <p className={styles.quote}>{content.closingQuote}</p>
  </SectionShell>
);
