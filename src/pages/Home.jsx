import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    // const [name, setname] = useState()
    return (
        <div class="container mt-5">
            <div class="header">
                <h1 class="title">Online Exam</h1>
                <h2 class="subtitle">Take your exams online from anywhere</h2>
            </div>
            <div class="content">
                <p>This is the homepage for our online exam platform. You can take exams from anywhere, at any time. Just click the button below to get started.</p>
                <div className="text-center">
                    {/* <input type="text" placeholder='Enter your name' className='form-control' /> */}
                    <br />
                    <Link className='button animation'  to='/test'>Start Exam</Link>
                    
                </div>
            </div>
        </div>
    )
}
