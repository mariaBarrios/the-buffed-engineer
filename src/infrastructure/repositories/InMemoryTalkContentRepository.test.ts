import { describe, expect, it } from 'vitest';
import type { TalkContentRepository } from '../../domain/ports/TalkContentRepository';
import { InMemoryTalkContentRepository } from './InMemoryTalkContentRepository';

describe('InMemoryTalkContentRepository', () => {
  it('implements the repository contract and returns complete content', () => {
    const repository: TalkContentRepository = new InMemoryTalkContentRepository();
    const content = repository.getContent();

    expect(content.hero.title.length).toBeGreaterThan(0);
    expect(content.timeline.entries.length).toBeGreaterThan(0);
    expect(content.aiRails.entries.length).toBeGreaterThan(0);
    expect(content.aiEngineeringFundamentals.entries.length).toBeGreaterThan(0);
    expect(content.finalContact.email).toContain('@');
  });
});
