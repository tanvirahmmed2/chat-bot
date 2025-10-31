import React, {  createContext, useState } from 'react'

export const ThemeContext= createContext()


const Context = ({children}) => {
    const [response, setResponse]= useState([])
    const value={
        response, setResponse
    }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default Context
