import type { TalkContent } from '../../domain/entities/TalkContent';
import type { TalkContentViewModel } from '../view-models/TalkContentViewModel';

const toId = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const mapTalkContentToViewModel = (content: TalkContent): TalkContentViewModel => ({
  hero: content.hero,
  introProfile: content.introProfile,
  clientProjects: {
    ...content.clientProjects,
    clients: content.clientProjects.clients.map((client) => ({
      ...client,
      logoAlt: client.logoAlt || client.name,
    })),
  },
  codeDuel: content.codeDuel,
  skillTree: content.skillTree,
  timeline: content.timeline,
  manifesto: content.manifesto,
  aiFails: {
    ...content.aiFails,
    entries: content.aiFails.entries.map((entry) => ({
      ...entry,
      id: toId(entry.title),
    })),
  },
  dailyTasks: {
    ...content.dailyTasks,
    tasks: content.dailyTasks.tasks.map((task) => ({
      ...task,
      id: toId(task.title),
    })),
  },
  aiRails: {
    ...content.aiRails,
    entries: content.aiRails.entries.map((entry) => ({
      ...entry,
      id: toId(entry.title),
    })),
  },
  aiEngineeringFundamentals: {
    ...content.aiEngineeringFundamentals,
    entries: content.aiEngineeringFundamentals.entries.map((entry) => ({
      ...entry,
      id: toId(entry.title),
    })),
  },
  finalSlide: content.finalSlide,
  finalContact: content.finalContact,
});
