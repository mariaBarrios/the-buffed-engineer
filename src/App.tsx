import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GetTalkContent } from './application/use-cases/GetTalkContent';
import { InMemoryTalkContentRepository } from './infrastructure/repositories/InMemoryTalkContentRepository';
import { HeroUnlock } from './components/HeroUnlock/HeroUnlock';
import { CodeDuel } from './components/CodeDuel/CodeDuel';
import { SkillTree } from './components/SkillTree/SkillTree';
import { XpTimeline } from './components/XpTimeline/XpTimeline';
import { TerminalManifesto } from './components/TerminalManifesto/TerminalManifesto';
import { useLevelUnlock } from './hooks/useLevelUnlock';
import styles from './App.module.css';

export const App = () => {
  const content = useMemo(() => {
    const repository = new InMemoryTalkContentRepository();
    const getTalkContent = new GetTalkContent(repository);
    return getTalkContent.execute();
  }, []);

  const { isUnlocked, isUnlocking, unlockProgress, startUnlock } = useLevelUnlock();

  return (
    <div className={styles.app}>
      <HeroUnlock
        hero={content.hero}
        isUnlocked={isUnlocked}
        isUnlocking={isUnlocking}
        unlockProgress={unlockProgress}
        onUnlock={startUnlock}
      />

      <motion.main
        className={styles.app__content}
        initial={false}
        animate={{
          opacity: isUnlocked ? 1 : 0,
          y: isUnlocked ? 0 : 30,
          pointerEvents: isUnlocked ? 'auto' : 'none',
        }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <CodeDuel duel={content.codeDuel} />
        <SkillTree pillars={content.skillTree.pillars} />
        <XpTimeline timeline={content.timeline} />
        <TerminalManifesto manifesto={content.manifesto} active={isUnlocked} />
      </motion.main>
    </div>
  );
};
