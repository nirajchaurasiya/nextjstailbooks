import React, { useState } from 'react'
import Head from 'next/head'
import Register from './Register'
export default function Login() {
    const [showRegister, setShowRegister] = useState(true)
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
                            <input placeholder='Enter an email' type="text" />
                            <input placeholder='Enter password' type="text" />
                            <button>Login</button>
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
