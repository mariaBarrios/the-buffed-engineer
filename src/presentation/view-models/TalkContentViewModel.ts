export interface HeroViewModel {
  title: string;
  subtitle: string;
}

export interface CodeSnippetViewModel {
  label: string;
  language: string;
  code: string;
}

export interface CodeDuelViewModel {
  title: string;
  subtitle: string;
  aiSnippet: CodeSnippetViewModel;
  architectSnippet: CodeSnippetViewModel;
}

export interface TimelineEntryViewModel {
  year: string;
  title: string;
  stack: string;
  insight: string;
}

export interface TimelineViewModel {
  title: string;
  subtitle: string;
  entries: TimelineEntryViewModel[];
}

export interface AIFailEntryViewModel {
  id: string;
  title: string;
  description: string;
  example: string;
  solution: string;
}

export interface AIFailsViewModel {
  title: string;
  subtitle: string;
  entries: AIFailEntryViewModel[];
}

export interface DailyTaskEntryViewModel {
  id: string;
  title: string;
  description: string;
  example: string;
  impact: string;
}

export interface DailyTasksViewModel {
  title: string;
  subtitle: string;
  tasks: DailyTaskEntryViewModel[];
}

export interface AIRailsEntryViewModel {
  id: string;
  title: string;
  description: string;
  checklist: string[];
  example?: string;
  outcome: string;
}

export interface AIRailsViewModel {
  title: string;
  subtitle: string;
  entries: AIRailsEntryViewModel[];
}

export interface ContextStrategyLayerViewModel {
  id: string;
  title: string;
  objective: string;
  useWhen: string;
  artifact: string;
  example: string;
}

export interface ContextStrategyReferenceViewModel {
  label: string;
  url: string;
}

export interface ContextStrategyViewModel {
  title: string;
  subtitle: string;
  layers: ContextStrategyLayerViewModel[];
  references?: ContextStrategyReferenceViewModel[];
}

export interface AIEngineeringFundamentalsEntryViewModel {
  id: string;
  title: string;
  description: string;
  checklist: string[];
  outcome: string;
}

export interface AIEngineeringFundamentalsViewModel {
  title: string;
  subtitle: string;
  entries: AIEngineeringFundamentalsEntryViewModel[];
}

export interface IntroProfileViewModel {
  nameLead?: string;
  name: string;
  intro: string;
  experience: string;
  companyLogoSrc: string;
  companyLogoAlt: string;
  photoSrc: string;
  photoAlt: string;
}

export interface ClientProjectEntryViewModel {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  isCurrent?: boolean;
}

export interface ClientProjectsViewModel {
  title: string;
  subtitle: string;
  clients: ClientProjectEntryViewModel[];
}

export interface FinalSlideBlockViewModel {
  title: string;
  bullets: string[];
}

export interface FinalSlideReferenceViewModel {
  label: string;
  url: string;
}

export interface FinalSlideViewModel {
  title: string;
  subtitle: string;
  before: FinalSlideBlockViewModel;
  decisions: FinalSlideBlockViewModel;
  result: FinalSlideBlockViewModel;
  closingQuote: string;
  references: FinalSlideReferenceViewModel[];
}

export interface FinalContactViewModel {
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

export interface TalkContentViewModel {
  hero: HeroViewModel;
  introProfile: IntroProfileViewModel;
  clientProjects: ClientProjectsViewModel;
  codeDuel: CodeDuelViewModel;
  timeline: TimelineViewModel;
  aiFails: AIFailsViewModel;
  dailyTasks: DailyTasksViewModel;
  aiRails: AIRailsViewModel;
  contextStrategy: ContextStrategyViewModel;
  aiEngineeringFundamentals: AIEngineeringFundamentalsViewModel;
  finalSlide: FinalSlideViewModel;
  finalContact: FinalContactViewModel;
}
