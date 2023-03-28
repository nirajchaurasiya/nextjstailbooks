import React, { useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'
import Spinner from './Spinner'
import Profile from './Profile'
export default function Feed({ profile, userId, userdata }) {
    const [localstoreUserId, setlocalstoreUserId] = useState('')
    useEffect(() => {
        if (localStorage) {
            setlocalstoreUserId(JSON.parse(localStorage?.getItem('tailbooknetlifyuser'))._id)
        }
    }, [userId])

    return (
        <div className='feed'>
            {profile && <Profile userdata={userdata} />}
            {userId === localstoreUserId && <Share userdata={userdata} />}
            <br />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Spinner />
        </div>

    )
}
