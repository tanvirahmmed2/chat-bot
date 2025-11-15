import React, {  createContext, useState } from 'react'

export const ThemeContext= createContext()


const Context = ({children}) => {
    const [response, setResponse]= useState([])
    const api= 'https://cb-server-4l00.onrender.com'
    const value={
        response, setResponse,
        api
    }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default Context
