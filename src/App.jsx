import React from 'react'
import { IoIosMenu } from "react-icons/io";

const App = () => {
    return (
        <div className='w-full overflow-x-hidden'>
            <div className='w-full relative'>
                <div className='w-full fixed top-0 right-0'>
                    <nav className='w-full flex flex-row items-center justify-between px-4 h-14 shadow-lg'>
                        <a href="/" className='italic text-xl font-semibold'>Chat-Bot</a>
                        <div>
                            <div>

                            </div>
                            <button className='text-2xl '><IoIosMenu /></button>
                        </div>
                    </nav>
                </div>
                <div>
                    <div>

                    </div>
                    <footer>
                        
                    </footer>

                </div>
            </div>

        </div>
    )
}

export default App
