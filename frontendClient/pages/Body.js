import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import RightBarProfile from '../components/RightBarProfile'
import { useEffect, useState } from "react";
import Nav from '../components/Nav'
import axios from "axios";
export default function Body({ profile, userId }) {
    const [userData, setUserData] = useState([])
    const [userNotFound, setUserNotFound] = useState(false)
    useEffect(() => {

        const localstore = JSON.parse(localStorage.getItem('tailbooknetlifyuser'))
        console.log(localstore)
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
    }, [])
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
                <Feed profile={profile} userId={userId} userdata={userData} />
                {!profile ? <Rightbar /> : <RightBarProfile userdata={userData} />}
            </div>

        </>
    )
}
