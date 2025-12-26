export type Task = {
  description: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
  isDone: boolean;
  id: string;
};
