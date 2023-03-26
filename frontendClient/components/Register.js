import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Login from './Login'
export default function Register() {
    const [showLogin, setShowLogin] = useState(true)
    const [profile, setProfile] = useState('')
    const [cover, setCover] = useState('')
    const email = useRef();
    const phone = useRef();
    const password = useRef();
    const cpassword = useRef();
    const shortquote = useRef();
    const aboutyourself = useRef();
    const from = useRef();
    const city = useRef();
    const hobbies = useRef();
    const status = useRef();
    const handleClickRegister = () => {
        try {
            if (profile) {

            }
        } catch (error) {

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
            {showLogin ? <div className="register-user-box">
                <div className="register-box-model">
                    <div className="register-content">
                        <h1>Register Now</h1>
                        <p>Connect to the world in one click. Join Now!</p>
                    </div>
                    <div className="register-inputs-btn">
                        <span style={{ color: "red", fontSize: "14px" }}>* = required</span>
                        <div className="register-inputs">
                            <input ref={email} placeholder='Enter an email*' type="email" />
                            <input ref={phone} placeholder='Enter phone*' type="text" />
                            <input ref={password} placeholder='Enter an password*' type="password" />
                            <input ref={cpassword} placeholder='Confirm password*' type="password" />
                            <input ref={shortquote} placeholder='Short Quote' type="text" />
                            <input ref={aboutyourself} placeholder='Write about yourself' type="text" />
                            <input ref={from} placeholder='Where are you from?' type="text" />
                            <input ref={city} placeholder='City name?' type="text" />
                            <input ref={hobbies} placeholder='Hobbies' type="text" />
                            <input ref={status} placeholder='Married or Single or In a relationship or Relationship' type="text" />
                            <div><input placeholder='Hobbies' type="file" onChange={(e) => { setProfile(e.target.files[0]) }} />profile</div>
                            <div><input placeholder='Married or Single or In a relationship or Relationship*' onChange={(e) => { setProfile(e.target.files[0]) }} type="file" />Cover</div>
                            <button onClick={handleClickRegister}>Register</button>
                        </div>
                        <div className="signup-btn">
                            <button onClick={() => { setShowLogin(!showLogin) }}>Login</button>
                        </div>
                    </div>

                </div>

            </div> : <Login />}
        </>
    )
}
