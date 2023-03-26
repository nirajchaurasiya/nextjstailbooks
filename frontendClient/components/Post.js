import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai'
export default function Post() {
    return (
        <div className="feed-content">
            <div className='feed-posts-box'>
                <div className="feed-contents">
                    <div className="profile-picture-owner">
                        <img src="/profile.jpeg" alt="" />
                        <div className="feed-name-owners" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <p className='name-of-the-owner'>Niraj Chaurasiya</p><p style={{ fontSize: "12px" }}>1 hr ago</p>
                        </div>
                    </div>

                    <div className="feed-more-options">
                        <BsThreeDotsVertical />
                    </div>

                </div>
                <div className="hr-line-afterphoto"></div>
                <div className="posts-description">
                    <p>Hello! This is my first post.</p>
                </div>
                <div className="posts-images">
                    <img src="/posts.jpg" alt="images" />
                </div>
                <div className="posts-like-subscribe">
                    <div className="like-posts">
                        <AiOutlineLike />
                        <span>Like</span>
                    </div>
                    <div className="like-posts">
                        <AiOutlineComment />
                        <span>Comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
