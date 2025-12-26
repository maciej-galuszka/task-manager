import { useState } from 'react';
import { Button } from './Button';
import { formatDate } from '../helpers/formatDate';
import type { Task } from '../types/Task';

type TaskFormProps = {
  onAddTask: (task: Task) => void;
};

type Priority = 'High' | 'Medium' | 'Low';

export function TaskForm({ onAddTask }: TaskFormProps) {
  const today = new Date();
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState<Priority | ''>('');

  function handlePriorityChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value;
    if (value === 'Low' || value === 'Medium' || value === 'High') {
      setPriority(value);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!priority) return;

    const id = crypto.randomUUID();
    // Create new task object and pass it to App component
    const task: Task = { description, date, priority, isDone: false, id };
    onAddTask(task);

    setDescription('');
    setDate('');
    setPriority('');
  }

  return (
    <form className="input-text-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Start writing and submit to create tasks"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></input>
      <select
        value={priority}
        onChange={handlePriorityChange}
        className="input-details input-details--priority"
        required
      >
        <option value="" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        className="input-details input-details--date"
        type="date"
        id="start"
        name="trip-start"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={formatDate(new Date())}
        max={formatDate(new Date(today.getTime() + 120 * 24 * 60 * 60 * 1000))}
        required
      />

      <Button className={'btn--add'} type="submit">
        ⤶
      </Button>
    </form>
  );
}
