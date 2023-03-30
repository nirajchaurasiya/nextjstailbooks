import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Register from './Register'
import axios from 'axios';
export default function Login() {
    const [showRegister, setShowRegister] = useState(true)
    const email = useRef();
    const password = useRef();
    useEffect(() => {
        if (localStorage.getItem('tailbooknetlifyuser')) {
            window.location.href = '/'
        }
    }, [])
    const loginHandleBtn = () => {
        try {
            const datas = {
                email: email.current.value,
                password: password.current.value
            }
            axios.post('/backend/api/auth/login', datas)
                .then((data) => {
                    // console.log(data.data)
                    if (data.data.code === "1") {
                        localStorage.setItem('tailbooknetlifyuser', JSON.stringify(data.data.user))
                        window.location.reload();
                    }
                    else {
                        console.log(data.data.msg)
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Head>
                <title>Tailbooks | Login | Register</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            {showRegister ? <div className="login-user-box">
                <div className="login-box-model">
                    <div className="login-content">
                        <h1>Login Now</h1>
                        <p>Connect to the world in one click. Join Now!</p>
                    </div>
                    <div className="login-inputs-btn">
                        <div className="login-inputs">
                            <input ref={email} placeholder='Enter an email' type="email" />
                            <input ref={password} placeholder='Enter password' type="password" />
                            <button onClick={loginHandleBtn}>Login</button>
                            <p>Forgot password??</p>
                        </div>
                        <div className="signup-btn">
                            <button onClick={() => { setShowRegister(!showRegister) }}>Signup</button>
                        </div>
                        <div className="demo-account-details">
                            <p>For Demo:</p><br />
                            <b>email: demo@gmail.com</b><br /><br />
                            <b>password: demo@1234</b>
                        </div>
                    </div>

                </div>

            </div> : <Register />}
        </>
    )
}
