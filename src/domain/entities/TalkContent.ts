export interface HeroContent {
  title: string;
  subtitle: string;
}

export interface CodeSnippet {
  label: string;
  language: string;
  code: string;
}

export interface CodeDuelContent {
  title: string;
  subtitle: string;
  aiSnippet: CodeSnippet;
  architectSnippet: CodeSnippet;
}

export interface SkillPillar {
  id: 'stability' | 'scalability' | 'performance';
  title: string;
  description: string;
}

export interface SkillTreeContent {
  title: string;
  subtitle: string;
  pillars: SkillPillar[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  stack: string;
  insight: string;
}

export interface TimelineContent {
  title: string;
  subtitle: string;
  entries: TimelineEntry[];
}

export interface ManifestoContent {
  title: string;
  prompt: string;
  lines: string[];
}

export interface AIFailEntry {
  title: string;
  description: string;
  example: string;
  solution: string;
}

export interface AIFailsContent {
  title: string;
  subtitle: string;
  entries: AIFailEntry[];
}

export interface DailyTaskEntry {
  title: string;
  description: string;
  example: string;
  impact: string;
}

export interface DailyTasksContent {
  title: string;
  subtitle: string;
  tasks: DailyTaskEntry[];
}

export interface AIRailsEntry {
  title: string;
  description: string;
  checklist: string[];
  example?: string;
  outcome: string;
}

export interface AIRailsContent {
  title: string;
  subtitle: string;
  entries: AIRailsEntry[];
}

export interface AIEngineeringFundamentalsEntry {
  title: string;
  description: string;
  checklist: string[];
  outcome: string;
}

export interface AIEngineeringFundamentalsContent {
  title: string;
  subtitle: string;
  entries: AIEngineeringFundamentalsEntry[];
}

export interface IntroProfileContent {
  /** Optional lead-in before `name` (e.g. "Soy "); `name` is styled as the highlighted part */
  nameLead?: string;
  name: string;
  intro: string;
  experience: string;
  companyLogoSrc: string;
  companyLogoAlt: string;
  photoSrc: string;
  photoAlt: string;
}

export interface ClientProjectEntry {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  /** Highlight as current client */
  isCurrent?: boolean;
}

export interface ClientProjectsContent {
  title: string;
  subtitle: string;
  clients: ClientProjectEntry[];
}

export interface TalkContent {
  hero: HeroContent;
  introProfile: IntroProfileContent;
  clientProjects: ClientProjectsContent;
  codeDuel: CodeDuelContent;
  skillTree: SkillTreeContent;
  timeline: TimelineContent;
  manifesto: ManifestoContent;
  aiFails: AIFailsContent;
  dailyTasks: DailyTasksContent;
  aiRails: AIRailsContent;
  aiEngineeringFundamentals: AIEngineeringFundamentalsContent;
}
