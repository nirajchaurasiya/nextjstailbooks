import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai'
import { format } from 'timeago.js'
import Spinner from './Spinner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
export default function Post({ data, userdata }) {
    const [likes, setLikes] = useState();
    const [IsLike, setIsLike] = useState(false)
    const likeHandler = () => {

        try {
            if (IsLike) {
                axios.put(`/backend/api/posts/${data?._id}`, { userId: userdata._id })
                    .then((data) => {
                        console.log(data.data)
                        setIsLike(false);
                        setLikes(likes - 1)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else {
                axios.put(`/backend/api/posts/${data?._id}`, { userId: userdata._id })
                    .then((data) => {
                        console.log(data.data)
                        setIsLike(true)
                        setLikes(likes + 1)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        setLikes(data?.likes?.length - 1)
    }, [data.likes])
    return (
        <>
            {data ? <div className="feed-content">
                <div className='feed-posts-box'>
                    <div className="feed-contents">
                        <Link href={`/profile/${data.userId}`} style={{ color: "black", textDecoration: "none" }}>
                            <div className="profile-picture-owner">
                                <img src={`/backend/${data.userImage}`} alt="" />
                                <div className="feed-name-owners" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <p className='name-of-the-owner'>{data?.name}</p><p style={{ fontSize: "12px" }}>{format(data?.createdAt)}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="feed-more-options">
                            <BsThreeDotsVertical />
                        </div>

                    </div>
                    <div className="hr-line-afterphoto"></div>
                    <div className="posts-description">
                        <p>{data?.desc}</p>
                    </div>
                    <div className="posts-images">
                        <img src={`/backend/${data?.postImage}`} alt="images" />
                    </div>
                    <div className="posts-like-subscribe">
                        <div className="like-posts" onClick={likeHandler}>
                            <AiOutlineLike />
                            <span>{likes} Like</span>
                        </div>
                        <div className="like-posts">
                            <AiOutlineComment />
                            <span>{data?.comment?.length} Comment</span>
                        </div>
                    </div>
                </div>
            </div> : <Spinner />}
        </>
    )
}
