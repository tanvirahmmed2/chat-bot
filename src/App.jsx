import React, { useContext, useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { ThemeContext } from './Context';

const App = () => {
    const {response, setResponse}= useContext(ThemeContext)
    const [formData, setFormData]=useState({
        language:'',
        prompt:''
    })

    

    const handleChange=(e)=>{
        const {name, value}= e.target
        setFormData((prev)=>({...prev, [name]: value}))
    }

    const handlePrompt=(e)=>{
        e.preventDefault()
        setResponse((prev)=> [...prev, formData.prompt])
    }

    return (
        <div className='w-full overflow-x-hidden'>
            <div className='w-full relative'>
                <div className='w-full fixed top-0 right-0'>
                    <nav className='w-full flex flex-row items-center justify-between px-4 h-14 border-b-2 bg-white'>
                        <a href="/" className='font-serif text-xl font-semibold'>Chat-Bot</a>
                        <div>
                            <div>

                            </div>
                            <button className='text-2xl '><IoIosMenu /></button>
                        </div>
                    </nav>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full min-h-screen flex items-center justify-end flex-col p-4 gap-4'>
                        <h1 className='w-full text-center font-semibold text-2xl'>Welcome to <span>chat bot</span></h1>
                        {
                            response && <div>{
                                response.map((e)=>{
                                    return <div key={e}>{e}</div>
                                })
                            }</div>
                        }
                        <form onSubmit={handlePrompt} className='w-full flex flex-col items-center justify-center md:w-3/4 gap-2'>
                            <textarea name="prompt" id="prompt" onChange={handleChange} value={formData.prompt} className='w-full border-2 outline-none p-4 rounded-xl'></textarea>
                            <button type='submit' className='shadow-sm p-2 px-4 bg-gray-500  text-white rounded-lg'>Create content</button>
                        </form>
                    </div>

                    <footer className='w-full items-center flex justify-center py-4 border-t-2 '>
                        <a href="https://disibin.com">Developed by Disibin</a>

                    </footer>

                </div>
            </div>

        </div>
    )
}

export default App
