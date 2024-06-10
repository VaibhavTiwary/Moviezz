import React, { useState } from 'react'
import Header from './Header'

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = () => {
        setIsLogin(!isLogin)
    }

    const getInputData = (e) => {
        e.preventDefault();    //page will not get reloaded on clicking signup or login button using this
        console.log(fullName, email, password)
        setFullName("")
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src='https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp' alt='background'></img>
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-80 rounded-md'>
                <h1 className='text-3xl text-white mb-5 font-bold'> {isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {
                        !isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
                    }

                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
                    <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin ? "Login" : "Signup"}</button>
                    <p className='text-white mt-2'>{isLogin ? "New to Moviezz?" : "Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-900 cursor-pointer font-medium'>{isLogin ? "Signup" : "Login"}</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login