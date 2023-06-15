type TaskManager = {
  task: Task|null;
  title: string|null;
  action:string;
}

export const TASK_ACTIONS = {
  ADD: 'add',
  SEARCH:"search",
  DELETE:"delete",
  UPDATE: "update"
}

const useTaskManager = (task: Task|null,title:string|null ,action: string) => {
  if (action == TASK_ACTIONS.ADD) {
  }
}

export {
  useTaskManager
}

type Task = {
  id: string | null;
  title: string;
  description: string;
}

type TaskStore = {
  currentTask: Task | null;
  allTasks: Task[];
  setAllTasks: (tasks: Task[]) => void;
};

const taskStore = (set): TaskStore => ({
  currentTask: null,
  allTasks: [],
  setAllTasks: (tasks) => {
    set((state) => ({
      userChannels: tasks,
    }));
  },
});