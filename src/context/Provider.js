import React,{useState} from 'react'

const ContextApp = React.createContext()

const Provider = ({children}) => {
  const [isSubbarOpen, setIsSubbarOpen] = useState(false)

  return (
    <ContextApp.Provider value={{isSubbarOpen,setIsSubbarOpen}}>
        {children}
    </ContextApp.Provider>
  )
}

export const useContextProvider = ()=>{
    return React.useContext(ContextApp)
}
export default Provider