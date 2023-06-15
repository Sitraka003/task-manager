const LocalStorageDataProvider = {
  getTasks : (keyList:[])=>{
    let tasks = []
    for (const key of keyList) {
      tasks.push(localStorage.getItem(key))
    }
    return tasks;
  },
  createTask : (task:{})=>{
    localStorage.setItem(task?.id, JSON.stringify(task))
  }
}
const useLocalStorage = () => {
  return {
    getTasks : (keyList:[]) => LocalStorageDataProvider.getTasks(keyList),
    createTask : (task:{})=>LocalStorageDataProvider.createTask(task)
  }
}

export {
  useLocalStorage
}