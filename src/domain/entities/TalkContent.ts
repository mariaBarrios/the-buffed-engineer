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

export interface ContextStrategyLayer {
  title: string;
  objective: string;
  useWhen: string;
  artifact: string;
  example: string;
}

export interface ContextStrategyReference {
  label: string;
  url: string;
}

export interface ContextStrategyContent {
  title: string;
  subtitle: string;
  layers: ContextStrategyLayer[];
  references?: ContextStrategyReference[];
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

export interface FinalSlideBlock {
  title: string;
  bullets: string[];
}

export interface FinalSlideReference {
  label: string;
  url: string;
}

export interface FinalSlideContent {
  title: string;
  subtitle: string;
  before: FinalSlideBlock;
  decisions: FinalSlideBlock;
  result: FinalSlideBlock;
  closingQuote: string;
  references: FinalSlideReference[];
}

export interface FinalContactContent {
  title: string;
  subtitle: string;
  eyebrow: string;
  badge: string;
  thanks: string;
  motivation: string;
  contactPrompt: string;
  linkedinLabel: string;
  linkedinUrl: string;
  email: string;
}

export interface TalkContent {
  hero: HeroContent;
  introProfile: IntroProfileContent;
  clientProjects: ClientProjectsContent;
  codeDuel: CodeDuelContent;
  timeline: TimelineContent;
  aiFails: AIFailsContent;
  dailyTasks: DailyTasksContent;
  aiRails: AIRailsContent;
  contextStrategy: ContextStrategyContent;
  aiEngineeringFundamentals: AIEngineeringFundamentalsContent;
  finalSlide: FinalSlideContent;
  finalContact: FinalContactContent;
}
