import { describe, expect, it } from 'vitest';
import { GetTalkContent } from './GetTalkContent';
import type { TalkContent } from '../../domain/entities/TalkContent';
import type { TalkContentRepository } from '../../domain/ports/TalkContentRepository';

const contentFixture: TalkContent = {
  hero: { title: 'The Buffed Architect', subtitle: 'subtitle' },
  introProfile: {
    nameLead: 'Soy ',
    name: 'María',
    intro: 'intro',
    experience: 'experience',
    companyLogoSrc: '/logo.png',
    companyLogoAlt: 'Logo',
    photoSrc: '/photo.png',
    photoAlt: 'Photo',
  },
  clientProjects: {
    title: 'clients',
    subtitle: 'clients subtitle',
    clients: [],
  },
  codeDuel: {
    title: 'duel',
    subtitle: 'duel subtitle',
    aiSnippet: { label: 'ai', language: 'ts', code: 'console.log(1);' },
    architectSnippet: { label: 'architect', language: 'ts', code: 'console.log(2);' },
  },
  timeline: {
    title: 'timeline',
    subtitle: 'timeline subtitle',
    entries: [],
  },
  aiFails: {
    title: 'fails',
    subtitle: 'fails subtitle',
    entries: [],
  },
  dailyTasks: {
    title: 'tasks',
    subtitle: 'tasks subtitle',
    tasks: [],
  },
  aiRails: {
    title: 'rails',
    subtitle: 'rails subtitle',
    entries: [],
  },
  contextStrategy: {
    title: 'strategy',
    subtitle: 'strategy subtitle',
    layers: [],
  },
  aiEngineeringFundamentals: {
    title: 'fundamentals',
    subtitle: 'fundamentals subtitle',
    entries: [],
  },
  finalSlide: {
    title: 'Final',
    subtitle: 'final subtitle',
    before: { title: 'Before', bullets: [] },
    decisions: { title: 'Decisions', bullets: [] },
    result: { title: 'Result', bullets: [] },
    closingQuote: 'Quote',
    references: [],
  },
  finalContact: {
    title: 'Closing',
    subtitle: 'closing subtitle',
    eyebrow: 'THANK YOU',
    badge: 'LET S BUILD WHAT MATTERS',
    thanks: 'Gracias',
    motivation: 'Motivation',
    contactPrompt: 'Contact me',
    linkedinLabel: 'LinkedIn',
    linkedinUrl: 'https://example.com',
    email: 'name@example.com',
  },
};

class StubTalkContentRepository implements TalkContentRepository {
  getContent(): TalkContent {
    return contentFixture;
  }
}

describe('GetTalkContent', () => {
  it('returns the same content provided by the repository port', () => {
    const useCase = new GetTalkContent(new StubTalkContentRepository());

    const result = useCase.execute();

    expect(result).toEqual(contentFixture);
  });
});
