import type { TalkContent } from '../entities/TalkContent';

export interface TalkContentRepository {
  getContent(): TalkContent;
}
