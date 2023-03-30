import React, { useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'
import Profile from './Profile'

export default function Feed({ profile, userId, userdata, watch, allposts }) {
    const [localstoreUserId, setlocalstoreUserId] = useState('')
    const [localStore, setLocalStore] = useState('')

    useEffect(() => {
        if (localStorage) {
            setlocalstoreUserId(JSON.parse(localStorage?.getItem('tailbooknetlifyuser'))._id)
            setLocalStore(JSON.parse(localStorage?.getItem('tailbooknetlifyuser')))
        }
    }, [userId, allposts])

    return (
        <div className='feed'>
            {profile ? <Profile userdata={userdata} userId={userId} /> : watch ? <Share watch={watch} userdata={localStore} /> : ''}
            {userId === localstoreUserId && <Share userdata={userdata} />}
            <br />
            {profile ?
                <>
                    {allposts && allposts.map(e => {
                        return (
                            <Post key={e?._id} data={e} userdata={userdata} />
                        )
                    })}

                </>
                : watch ?
                    "" :
                    <>
                        {allposts && allposts.map(e => {
                            return (
                                <Post key={e?._id} data={e} userdata={userdata} />
                            )
                        })}

                    </>
            }


        </div>

    )
}
