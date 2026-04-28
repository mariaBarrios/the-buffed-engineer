import { motion } from 'framer-motion';
import { HeroUnlock } from './components/HeroUnlock/HeroUnlock';
import { IntroProfile } from './components/IntroProfile/IntroProfile';
import { ClientProjects } from './components/ClientProjects/ClientProjects';
import { CodeDuel } from './components/CodeDuel/CodeDuel';
import { AIFails } from './components/AIFails/AIFails';
import { DailyTasks } from './components/DailyTasks/DailyTasks';
import { AIRails } from './components/AIRails/AIRails';
// import { ContextStrategy } from "./components/ContextStrategy/ContextStrategy";
import { AIEngineeringFundamentals } from './components/AIEngineeringFundamentals/AIEngineeringFundamentals';
import { ParadigmShift } from './components/ParadigmShift/ParadigmShift';
import { XpTimeline } from './components/XpTimeline/XpTimeline';
// import { FinalKnowledgePill } from "./components/FinalKnowledgePill/FinalKnowledgePill";
import { FinalContact } from './components/FinalContact/FinalContact';
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
      <AIFails content={content.aiFails} />
      <DailyTasks content={content.dailyTasks} />
      <AIRails content={content.aiRails} />
      {/* <ContextStrategy content={content.contextStrategy} /> */}
      <AIEngineeringFundamentals content={content.aiEngineeringFundamentals} />
      <ParadigmShift content={content.paradigmShift} />
      {/* <FinalKnowledgePill content={content.finalSlide} /> */}
      <FinalContact content={content.finalContact} />
    </motion.main>
  </div>
);
