import type { TalkContent } from '../../domain/entities/TalkContent';
import type { TalkContentRepository } from '../../domain/ports/TalkContentRepository';

export class GetTalkContent {
  private readonly repository: TalkContentRepository;

  constructor(repository: TalkContentRepository) {
    this.repository = repository;
  }

  execute(): TalkContent {
    return this.repository.getContent();
  }
}
