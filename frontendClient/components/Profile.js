import axios from "axios";
import { useState } from "react"
import { } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import Spinner from "./Spinner";
export default function Profile({ userdata, userId, localstoreUserId }) {
    const [cover, setCover] = useState('')
    const [toShow, setToShow] = useState(false)
    const [textToShowToBtn, setTextToShowToBtn] = useState('Update Images')
    const changeTheCoverPicture = () => {
        if (cover) {
            const userData = JSON.parse(localStorage.getItem('tailbooknetlifyuser'));
            const _id = userData._id;

            const fd = new FormData();
            fd.append('cover', cover);
            try {
                axios.post(`/backend/api/auth/updateCover/${_id}`, fd)
                    .then((data) => {
                        if (data.data.status === "1") {
                            localStorage.setItem('tailbooknetlifyuser', JSON.stringify(data.data.msg))
                            window.location.reload();
                        } else {
                            console.log(data.data.msg)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } catch (error) {
            }
        }
        else {
            alert('Please select a cover picture to upload.')
        }
    }
    const changeTheProfilePicture = () => {
        if (cover) {
            const userData = JSON.parse(localStorage.getItem('tailbooknetlifyuser'));
            const _id = userData._id;

            const fd = new FormData();
            fd.append('cover', cover);
            try {
                axios.post(`/backend/api/auth/updateProfile/${_id}`, fd)
                    .then((data) => {
                        if (data.data.status === "1") {
                            localStorage.setItem('tailbooknetlifyuser', JSON.stringify(data.data.msg))
                            window.location.href = '/'
                        } else {
                            console.log(data.data.msg)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } catch (error) {
            }
        }
        else {
            alert('Please select a profile picture to upload.')
        }
    }

    return (
        <>
            {
                userdata ? <div className='profile-picture'>
                    <div className="user-cover">
                        <img src={userdata.cover ? `/backend/${userdata.cover}` : `/backend/${userdata.profile}`} />
                        {userId === localstoreUserId && <button onClick={() => { setToShow(!toShow); setTextToShowToBtn(!toShow ? <RxCross1 /> : 'Update Images') }}>{textToShowToBtn}</button>}
                    </div>


                    {(userId === localstoreUserId) &&
                        toShow &&
                        userdata._id === userId ? <>
                        <div className="upload-cover-from-profile">
                            <input onChange={(e) => { setCover(e.target.files[0]) }} type="file" name="cover" id="cover" />
                            <button onClick={changeTheCoverPicture}>Update Cover</button>
                            <button onClick={changeTheProfilePicture}>Update Profile</button>
                        </div></> : ""

                    }
                    <div className="user-profile">
                        <img src={`/backend/${userdata.profile}`} alt="" />
                    </div>
                    <div className="user-name">
                        <b>{userdata?.name}</b>
                        <p>{userdata?.shortquote}</p>
                    </div>


                </div> : <Spinner />
            }
        </>
    )
}
