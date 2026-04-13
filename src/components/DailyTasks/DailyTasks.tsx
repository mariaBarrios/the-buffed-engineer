import { motion } from 'framer-motion';
import {
  BookOpen,
  ChevronDown,
  TestTube2,
  Wrench,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { DailyTasksContent } from '../../domain/entities/TalkContent';
import styles from './DailyTasks.module.css';

interface DailyTasksProps {
  content: DailyTasksContent;
}

const iconByTitle: Record<string, LucideIcon> = {
  'Refactorización Segura': Wrench,
  'Generación de Tests Tediosos': TestTube2,
  'Explicación de Código Alienígena': BookOpen,
  'Automatización de Tareas Repetitivas': Workflow,
};

export const DailyTasks = ({ content }: DailyTasksProps) => {
  return (
    <section className={styles.dailyTasks}>
      <div className={styles.dailyTasks__header}>
        <motion.h2 
          className={styles.dailyTasks__title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        <motion.p 
          className={styles.dailyTasks__subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.p>
      </div>

      <div className={styles.dailyTasks__grid}>
        {content.tasks.map((task, index) => {
          const TaskIcon = iconByTitle[task.title] ?? BookOpen;

          return (
          <motion.article 
            key={index}
            className={styles.taskCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <details className={styles.taskCard__details}>
              <summary className={styles.taskCard__summary}>
                <div className={styles.taskCard__titleRow}>
                  <TaskIcon className={styles.taskCard__titleIcon} />
                  <h3 className={styles.taskCard__title}>{task.title}</h3>
                </div>
                <ChevronDown className={styles.taskCard__chevron} />
              </summary>

              <div className={styles.taskCard__content}>
                <p className={styles.taskCard__description}>{task.description}</p>

                <div className={styles.taskCard__example}>
                  <strong>Ejemplo de Prompt:</strong>
                  {task.example}
                </div>

                <div className={styles.taskCard__impact}>
                  {task.impact}
                </div>
              </div>
            </details>
          </motion.article>
        );
        })}
      </div>
    </section>
  );
};