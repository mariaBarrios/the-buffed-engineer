import { motion } from 'framer-motion';
import { HeroUnlock } from './components/HeroUnlock/HeroUnlock';
import { IntroProfile } from './components/IntroProfile/IntroProfile';
import { ClientProjects } from './components/ClientProjects/ClientProjects';
import { CodeDuel } from './components/CodeDuel/CodeDuel';
import { SkillTree } from './components/SkillTree/SkillTree';
import { AIFails } from './components/AIFails/AIFails';
import { DailyTasks } from './components/DailyTasks/DailyTasks';
import { AIRails } from './components/AIRails/AIRails';
import { AIEngineeringFundamentals } from './components/AIEngineeringFundamentals/AIEngineeringFundamentals';
import { XpTimeline } from './components/XpTimeline/XpTimeline';
import { TerminalManifesto } from './components/TerminalManifesto/TerminalManifesto';
import type { TalkContentViewModel } from './presentation/view-models/TalkContentViewModel';
import styles from './App.module.css';

interface AppProps {
  content: TalkContentViewModel;
}

export const App = ({ content }: AppProps) => (
    <div className={styles.app}>
      <HeroUnlock hero={content.hero} />

      <motion.main
        className={styles.app__content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      >
        <IntroProfile content={content.introProfile} />
        <XpTimeline timeline={content.timeline} />
        <ClientProjects content={content.clientProjects} />
        <CodeDuel duel={content.codeDuel} />
        <SkillTree pillars={content.skillTree.pillars} />
        <AIFails content={content.aiFails} />
        <DailyTasks content={content.dailyTasks} />
        <AIRails content={content.aiRails} />
        <AIEngineeringFundamentals content={content.aiEngineeringFundamentals} />
        <TerminalManifesto manifesto={content.manifesto} active={true} />
      </motion.main>
    </div>
  );
