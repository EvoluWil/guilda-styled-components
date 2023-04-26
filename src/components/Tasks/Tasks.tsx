import { Task } from '../../model/Task.model';
import { Checkbox } from '../Checkbox/Checkbox.style';
import { TaskList, TaskText } from './Tasks.style';

type TasksProps = {
  tasks: Task[];
  onChange: (taskId: number) => void;
};

export const Tasks: React.FC<TasksProps> = ({ tasks, onChange }) => {
  return (
    <TaskList>
      {tasks.map(task => (
        <li key={task.id}>
          <Checkbox
            type="checkbox"
            checked={task.completed}
            onChange={() => onChange(task.id)}
          />
          <TaskText completed={task.completed}>{task.text}</TaskText>
        </li>
      ))}
    </TaskList>
  );
};
