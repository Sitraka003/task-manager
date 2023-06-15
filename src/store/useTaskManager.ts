import { title } from "process"
import { create } from "zustand"

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type Tasks = {
  task : Task
}

interface TaskManagerState {
  tasks: Task[];
  searchTask: string;
  addTask: (task: Task) => void;
  updateTask: (taskId: number, updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
  setSearchTask: (search: string) => void;
}

const useTaskManager = create<TaskManagerState>((set) => ({
  tasks: [],
  searchTask: '',
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  updateTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  setSearchTask: (search) =>
    set((state) => ({
      searchTask: search,
    })),
}));

export {
  useTaskManager
}