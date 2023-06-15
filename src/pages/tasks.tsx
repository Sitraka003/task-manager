import { useTaskManager } from '@/store/useTaskManager';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

interface Task {
  id: number,
  title: string,
  completed: boolean,
}

const TaskManager = () => {
  const createTaskRef = useRef("");
  const [toPrint, setToPrint] = useState([]);

   const {
     tasks,
     searchTask,
     addTask,
     updateTask,
     deleteTask,
     setSearchTask,
  } = useTaskManager();

  const handleAddTask = () => {
    const title = createTaskRef.current.value; // Replace with the value in the createTaskRef 
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    //Keep previous and add the new one
    addTask([...tasks, newTask]);
  };

  const handleUpdateTask = (taskId: number, updatedTask: Task) => {
    //Change only the task with the provided id
    let updatedTasks = tasks.map((task:Task)=>{
      if (task?.id == taskId) {
        task = updatedTask
      }
      return task;
    })
    updateTask(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    //Remove only the task with the provided id
    let data = tasks.filter((task:Task)=>task.id != taskId)
    deleteTask(data);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value);
  };

  // See! I already give you everything!
   const filteredTasks = tasks.filter((task:Task) =>
     task.title.toLowerCase().includes(searchTask.toString().toLowerCase())
  );

  //Make the filter action happened at realtime
  useEffect(()=>{
    setToPrint(filteredTasks)
  }, [filteredTasks])


  return (
    <div>
      <h1>Task Manager</h1>

      <input type="text" ref={createTaskRef}/>

      <button onClick={handleAddTask}>Add Task</button>

      <input type="text" onChange={handleSearch} placeholder="Search Task" />

      <ul>
        {toPrint.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) =>
                handleUpdateTask(task.id, { title: e.target.value })
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
