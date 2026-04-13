export interface HeroContent {
  title: string;
  subtitle: string;
  callToAction: string;
  unlockedLabel: string;
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

export interface TalkContent {
  hero: HeroContent;
  codeDuel: CodeDuelContent;
  skillTree: SkillTreeContent;
  timeline: TimelineContent;
  manifesto: ManifestoContent;
}
