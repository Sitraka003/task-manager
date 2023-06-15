import useTaskManager from '@/store/useTaskManager';
import React, { ChangeEvent, useRef, useState } from 'react';

export interface Task {
  id: number,
  title: string,
  completed: boolean,
}

const TaskManager = () => {
  const {tasks, searchTask, addTask , setSearchTask, deleteTask, updateTask} = useTaskManager();
  const [titleValue, setTitleValue] = useState('')
  //const createTaskRef = ...:

  const handleAddTask = () => {
    const title = titleValue; // Replace with the value in the createTaskRef 
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTask);
  };

  const handleUpdateTask = (taskId: number, updatedTask: Task) => {
    updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value);
  };

  // See! I already give you everything!
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTask.toLowerCase())
  );
  return (
    <div>
      <h1>Task Manager</h1>

      <input type="text" value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>

      <button onClick={handleAddTask}>Add Task</button>

      <input type="text" onChange={handleSearch} placeholder="Search Task" />

      <ul>
        {filteredTasks.map((task:Task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) =>
                handleUpdateTask(task.id, {...task, title: e.target.value })
              }
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
