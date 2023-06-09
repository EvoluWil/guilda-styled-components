import React, { useState } from 'react';
import styled from 'styled-components';

import { AlertMessage } from './components/AlertMessage/AlertMessage';
import { Task } from './model/Task.model';
import { Tasks } from './components/Tasks/Tasks';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

type Alert = {
  type: 'SUCCESS' | 'ERROR';
  message: string;
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [alert, setAlert] = useState<Alert | null>(null);

  const handleAddTask = (): void => {
    if (newTask.trim() !== '') {
      const task = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, task]);
      setNewTask('');
      setAlert({ type: 'SUCCESS', message: 'Tarefa adicionada com sucesso!' });
    } else {
      setAlert({
        type: 'ERROR',
        message: 'Por favor, adicione uma tarefa válida.'
      });
    }
  };

  const handleTaskComplete = (id: number): void => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <Input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={newTask}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setNewTask(e.target.value)
        }
      />
      <Button onClick={handleAddTask}>Adicionar Tarefa</Button>
      {alert && <AlertMessage type={alert.type}>{alert.message}</AlertMessage>}
      <Tasks tasks={tasks} onChange={handleTaskComplete} />
    </Container>
  );
};

export default App;
