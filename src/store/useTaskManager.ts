import create, { SetState } from 'zustand';
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskManagerState {
  tasks: Task[];
  searchTask: Task[];
  addTask: (newTask: Task) => void;
  updateTask: (taskId: string, updatedTask: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  setSearchTask: (searchText: string) => void;
}


import create, { SetState } from 'zustand';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskManagerState {
  tasks: Task[];
  searchTask: Task[];
  addTask: (newTask: Task) => void;
  updateTask: (taskId: string, updatedTask: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  setSearchTask: (searchText: string) => void;
}

const useTaskManager = create<TaskManagerState>((set: SetState<TaskManagerState>) => ({
  tasks: [],
  searchTask: [],
  addTask: (newTask) => {
    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },
  updateTask: (taskId, updatedTask) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      ),
    }));
  },
  deleteTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
  setSearchTask: (searchText) => {
    set((state) => ({
      searchTask: state.tasks.filter((task) => task.title.includes(searchText)),
    }));
  },
}));


export {
  useTaskManager
}