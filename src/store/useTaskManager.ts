import { Task } from '@/pages/tasks';
import { create } from 'zustand';

const useTaskManager = create<DateState>((set, get) => ({
  tasks: [],
  addTask: (newTache: Task) =>
    set((state) => ({ ...state, tasks: [...state.tasks,newTache]})),
  idUser: null,
  searchTask: "",
  setSearchTask: (newSearchTache: string)=>
  set((state) => ({ ...state, searchTask: newSearchTache})),
  deleteTask: (idTask: number) =>{
    let tastsNow = get().tasks;
    const index = tastsNow.findIndex(item => item.id === idTask);
    tastsNow.splice(index, 1)
  set((state) => ({ ...state, tasks: tastsNow}))},
  updateTask: (taskId: number, updatedTask:Task) =>{
    let tastsNow = get().tasks;
    const index = tastsNow.findIndex(item => item.id === taskId);
    tastsNow[index] = updatedTask
  set((state) => ({ ...state, tasks: tastsNow}))},
}))

export type DateState = {
  tasks: Task[];
  addTask: (newTache: Task) => void;
  searchTask: string;
  setSearchTask: (newSearchTache: string) => void;
  deleteTask: (idTask: number) => void;
  updateTask: (taskId: number, updatedTask:Task)=>void
}

export default useTaskManager;


/*
//use:
import useStore from '@/zustand/useChannel';
export default function SideBar() {
  const { idChannel, idUser, setIdChannel, setIdUser } = useStore();
  return <></>
  }
*/