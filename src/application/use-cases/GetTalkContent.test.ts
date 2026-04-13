import { describe, expect, it } from 'vitest';
import { GetTalkContent } from './GetTalkContent';
import { InMemoryTalkContentRepository } from '../../infrastructure/repositories/InMemoryTalkContentRepository';

describe('GetTalkContent', () => {
  it('returns complete talk structure for all sections', () => {
    const useCase = new GetTalkContent(new InMemoryTalkContentRepository());

    const result = useCase.execute();

    expect(result.hero.title).toBe('THE BUFFED ARCHITECT');
    expect(result.codeDuel.aiSnippet.code).toContain('function UserDashboard');
    expect(result.skillTree.pillars).toHaveLength(3);
    expect(result.timeline.entries).toHaveLength(4);
    expect(result.manifesto.lines[0]).toContain('No delegues criterio');
  });
});
