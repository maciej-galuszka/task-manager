import { Button } from './Button';
import type { Task } from '../types/Task';
import { IoTrash } from 'react-icons/io5';

type TaskProps = {
  task: Task;
  onDeleteTask: (id: string) => void;
  onMarkTask: (id: string) => void;
};

// Render a single task with checkbox, details, and delete button
export function Task({ task, onDeleteTask, onMarkTask }: TaskProps) {
  return (
    <div className="task">
      <input
        className="task-checkbox"
        type="checkbox"
        onChange={() => onMarkTask(task.id)}
        checked={task.isDone}
      ></input>
      <label className={task.isDone ? 'marked' : ''}>{task.description} </label>

      <div className="task-details-container">
        <span
          className={`task-details task-details--priority ${
            task.isDone && 'marked'
          }`}
        >
          {task.priority}
        </span>{' '}
        <span
          className={`task-details task-details--date ${
            task.isDone && 'marked'
          }`}
        >
          {task.date}
        </span>
      </div>

      <Button
        className={`btn--delete`}
        onClick={() => onDeleteTask(task.id)}
        type="button"
      >
        <IoTrash className="icon" />
      </Button>
    </div>
  );
}
