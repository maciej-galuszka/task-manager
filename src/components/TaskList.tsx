import { Task } from './Task';
import type { Task as TaskType } from '../types/Task';

type TaskListProps = {
  tasks: TaskType[];
  onDeleteTask: (id: string) => void;
  onMarkTask: (id: string) => void;
};

// Render list of tasks
export function TaskList({ tasks, onDeleteTask, onMarkTask }: TaskListProps) {
  return (
    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onMarkTask={onMarkTask}
        />
      ))}
    </div>
  );
}
