import React, {  createContext, useState } from 'react'

export const ThemeContext= createContext()


const Context = ({children}) => {
    const [response, setResponse]= useState([])
    const api= 'http://localhost:5000'
    const value={
        response, setResponse,
        api
    }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default Context
