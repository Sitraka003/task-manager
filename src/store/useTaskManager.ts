import { create } from "zustand";

//Create store with zustand
const useTask = create((set)=>({
  tasks : [],
  searchTask : {},
  createTask : (toCreate:[])=>{
      set({ tasks : toCreate })
  },
  updateTask: (updatedTasks:[])=>{
      set({ tasks : updatedTasks})
  },
  deleteTask: (data:[])=>{
    set({ tasks : data })
  },
  setSearchTask : (e:{})=>{
    set({ searchTask : e })
  }
}))

const useTaskManager = () => {

  return{
    tasks : useTask(state => state?.tasks),
    addTask : useTask(state => state?.createTask),
    searchTask : useTask(state => state?.searchTask),
    updateTask : useTask(state => state?.updateTask),
    deleteTask : useTask(state => state?.deleteTask),
    setSearchTask : useTask(state => state?.setSearchTask)
  }
}

export {
  useTaskManager
}