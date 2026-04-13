import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GetTalkContent } from './application/use-cases/GetTalkContent';
import { App } from './App';
import { InMemoryTalkContentRepository } from './infrastructure/repositories/InMemoryTalkContentRepository';
import { mapTalkContentToViewModel } from './presentation/mappers/mapTalkContentToViewModel';
import './styles/global.css';

const repository = new InMemoryTalkContentRepository();
const getTalkContent = new GetTalkContent(repository);
const content = mapTalkContentToViewModel(getTalkContent.execute());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App content={content} />
  </StrictMode>,
);
