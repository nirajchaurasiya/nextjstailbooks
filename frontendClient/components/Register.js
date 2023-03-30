import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Login from './Login'
import axios from 'axios'
export default function Register() {
    const [showLogin, setShowLogin] = useState(true)
    const [profile, setProfile] = useState('')
    const name = useRef();
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
    const handleClickRegister = async (e) => {
        e.preventDefault();
        try {
            const fd = new FormData();
            fd.append('name', name.current.value);
            fd.append('email', email.current.value);
            fd.append('phone', phone.current.value);
            fd.append('password', password.current.value);
            fd.append('shortquote', shortquote.current.value);
            fd.append('aboutyourself', aboutyourself.current.value);
            fd.append('from', from.current.value);
            fd.append('city', city.current.value);
            fd.append('hobbies', hobbies.current.value);
            fd.append('status', status.current.value);
            fd.append('profile', profile);

            await axios.post('/backend/api/auth/register', fd)
                .then((data) => {
                    console.log(data.data.msg)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log("An unexpected error occured")
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
                        <form className="register-inputs" encType="multipart/form-data" onSubmit={handleClickRegister}>
                            <input ref={name} placeholder='Enter your name*' type="text" />
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
                            <div><input placeholder='Hobbies' name='profile' id='profile' type="file" onChange={(e) => { setProfile(e.target.files[0]); console.log(e.target.files[0]) }} />profile</div>
                            <button type='submit'>Register</button>
                        </form>
                        <div className="signup-btn">
                            <button onClick={() => { setShowLogin(!showLogin) }}>Login</button>
                        </div>
                    </div>

                </div>

            </div> : <Login />}
        </>
    )
}
