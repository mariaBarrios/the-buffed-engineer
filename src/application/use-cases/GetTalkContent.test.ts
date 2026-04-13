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
  skillTree: {
    title: 'skills',
    subtitle: 'skills subtitle',
    pillars: [],
  },
  timeline: {
    title: 'timeline',
    subtitle: 'timeline subtitle',
    entries: [],
  },
  manifesto: {
    title: 'manifesto',
    prompt: 'cat file',
    lines: ['line 1'],
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
  aiEngineeringFundamentals: {
    title: 'fundamentals',
    subtitle: 'fundamentals subtitle',
    entries: [],
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
