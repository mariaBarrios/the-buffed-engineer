import {
  BookOpen,
  TestTube2,
  Wrench,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { DailyTasksViewModel } from '../../presentation/view-models/TalkContentViewModel';
import { SectionShell } from '../SectionShell/SectionShell';
import { ExpandableCard } from '../ExpandableCard/ExpandableCard';
import styles from './DailyTasks.module.css';

interface DailyTasksProps {
  content: DailyTasksViewModel;
}

const iconByTitle: Record<string, LucideIcon> = {
  'Refactorización Segura': Wrench,
  'Generación de Tests Tediosos': TestTube2,
  'Explicación de Código Alienígena': BookOpen,
  'Automatización de Tareas Repetitivas': Workflow,
};

export const DailyTasks = ({ content }: DailyTasksProps) => {
  return (
    <SectionShell id="daily-tasks" title={content.title} subtitle={content.subtitle}>
      <div className={styles.dailyTasks__grid}>
        {content.tasks.map((task, index) => {
          const TaskIcon = iconByTitle[task.title] ?? BookOpen;

          return (
            <ExpandableCard
              key={task.id}
              title={task.title}
              icon={<TaskIcon className={styles.taskCard__titleIcon} />}
              delay={index * 0.1}
              className={styles.taskCard}
            >
              <p className={styles.taskCard__description}>{task.description}</p>

              <div className={styles.taskCard__example}>
                <strong>Ejemplo de Prompt:</strong>
                {task.example}
              </div>

              <div className={styles.taskCard__impact}>{task.impact}</div>
            </ExpandableCard>
          );
        })}
      </div>
    </SectionShell>
  );
};