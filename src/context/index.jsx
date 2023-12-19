import React, {createContext, useState} from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [title, setTitle] = useState({title:''})
  return (
    <AppContext.Provider value={{title, setTitle}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}
