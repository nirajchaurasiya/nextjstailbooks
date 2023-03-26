import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import RightBarProfile from '../components/RightBarProfile'
import { useEffect, useState } from "react";
import Nav from '../components/Nav'
import Login from "../components/Login";
export default function Body({ profile, userId }) {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        setIsAuth(localStorage.getItem('tailbooknetlifyuser') ? true : false)

    }, [])
    return (
        <>

            {isAuth ? <div className="main-body">
                <Nav />
                <Sidebar />
                <Feed profile={profile} userId={userId} />
                {!profile ? <Rightbar /> : <RightBarProfile />}
            </div> : <Login />}
        </>
    )
}
