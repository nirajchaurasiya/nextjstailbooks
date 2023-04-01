import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import RightBarProfile from '../components/RightBarProfile'
import Nav from '../components/Nav'

export default function Body({ profile, userId, watch, allPosts }) {
    const [userData, setUserData] = useState([])
    const [userProfile, setUserProfile] = useState('')
    const [userNotFound, setUserNotFound] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localstore = JSON.parse(localStorage.getItem('tailbooknetlifyuser'))
            if (!localstore) {
                window.location.href = '/login'
            }
            if (localstore) {
                try {
                    axios.get(`/backend/api/user/user/${localstore._id}`)
                        .then((data) => {
                            if (data.data.code === 1) {
                                setUserData(data.data.user)
                            }
                            else if (data.data.code === 0) {
                                setUserNotFound(true)
                            }
                            else {
                                alert("An unexpected error occured!")
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchSpcificuser(userId);
    }, [userId])

    const fetchSpcificuser = async (userId) => {
        try {
            await axios.get(`/backend/api/user/user/${userId}`)
                .then((data) => {
                    setUserProfile(data.data.user)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {

        }
    }

    const gotoLoginPage = () => {
        localStorage.clear();
        window.location.href = '/login';
    }
    if (userNotFound) {
        return (
            <div className="user-not-found">
                <div>
                    <img src="/logo.jpeg" alt="logo" />
                    <h2>User Not Found! <br /> Please <button onClick={gotoLoginPage} className="login-error-btn-user-not-found">login</button> again to continue.</h2>
                </div>
            </div>
        )
    }

    return (
        <>
            <Nav userdata={userData} />
            <div className="main-body">
                <Sidebar userdata={userData} />
                <Feed allposts={allPosts} profile={profile} userId={userId} userdata={userProfile} watch={watch} />
                {!profile ? <Rightbar userId={userId} /> : <RightBarProfile userdata={userProfile} userId={userId} />}
            </div>
        </>
    )
}
