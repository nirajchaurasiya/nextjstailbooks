import React from 'react'
import Share from './Share'
import Post from './Post'
import Spinner from './Spinner'
import Profile from './Profile'
export default function Feed({ profile, userId }) {
    return (
        <div className='feed'>
            {profile && <Profile />}
            {userId === 'f32f2323e21' && <Share />}
            <br />
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
