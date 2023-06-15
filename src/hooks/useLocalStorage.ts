const useLocalStorage = (item:any|null,localName="localeTask") => {
  if (item) {
  localStorage.setItem(localName,item)
  }else{
    return localStorage.getItem(localName)
  }
  
}

export {
  useLocalStorage
}