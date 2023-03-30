import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import RightBarProfile from '../components/RightBarProfile'
import { useEffect, useState } from "react";
import Nav from '../components/Nav'
import axios from "axios";
export default function Body({ profile, userId, watch, allPosts }) {
    const [userData, setUserData] = useState([])
    const [userProfile, setUserProfile] = useState('')
    const [userNotFound, setUserNotFound] = useState(false)
    useEffect(() => {

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
        fetchSpcificuser(userId);
    }, [userId])

    const fetchSpcificuser = async (userId) => {
        try {
            await axios.get(`/backend/api/user/user/${userId}`)
                .then((data) => {
                    console.log(data.data.user)
                    setUserProfile(data.data.user)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {

        }
    }
    if (userNotFound) {
        return (
            <div>
                user Not Found
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
