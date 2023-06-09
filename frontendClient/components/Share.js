import { useRef, useState } from 'react'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { BiHappy, BiLocationPlus } from 'react-icons/bi'
import axios from 'axios'
export default function Share({ userdata, watch }) {
    // Share Video
    const [video, setVideo] = useState('')
    const inputAreaForVideo = useRef();
    // Share Posts Image
    const [postImage, setPostImg] = useState('')
    const InputAreaForPosts = useRef();

    // Btn Video Share
    const handleVideoWatch = () => { }

    // Btn img share

    const sharePosts = () => {
        try {
            if (postImage) {
                const fd = new FormData();
                fd.append('desc', InputAreaForPosts.current.value);
                fd.append('userId', userdata._id);
                fd.append('name', userdata.name);
                fd.append('userImage', userdata.profile);
                fd.append('postImage', postImage);
                axios.post('/backend/api/posts', fd)
                    .then((data) => {
                        window.location.href = '/login';
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else {
                alert("Please select image")
            }
        } catch (error) {

        }
    }
    return (
        <>
            {watch ? <div className='share-posts-box'>
                <div className="share-contents">
                    <div className="profile-picture-owner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTNGsJGejNSCgyM6_xil5AGI-kkQdXvMvRH0eE0HFWA&s" alt="" />
                    </div>
                    <div className="share-name-owners">
                        <p className='name-of-the-owner'><span style={{ color: "red", fontSize: "15px" }}>Welcome, {userdata?.name}</span> </p>
                    </div>
                </div>
                <div className="share-posts-input">
                    <textarea placeholder={`Whats in your mind, ${userdata?.name}?`} type="text" />
                </div>
                <div className="share-icons-methods">
                    <div className="extra-support-icons" style={{ gap: "10px", marginTop: "2%" }}>
                        <label htmlFor="files">
                            <div className="share icons-file" style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                                <AiOutlineVideoCamera color='red' style={{ fontSize: "20px" }} />
                                <span style={{ fontSize: "12px" }}>Share videos</span>
                                <input type="file" onChange={(e) => { setVideo(e.target.files[0]) }} name='video' id="files" className='file-upload-to-hide' />
                            </div>
                        </label>
                    </div>
                    <div className="share-posts-btn">
                        <button onClick={handleVideoWatch}>Share</button>
                    </div>
                </div>
            </div>



                :


                <div className='share-posts-box'>
                    <div className="share-contents">
                        <div className="profile-picture-owner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTNGsJGejNSCgyM6_xil5AGI-kkQdXvMvRH0eE0HFWA&s" alt="" />
                        </div>
                        <div className="share-name-owners">
                            <p className='name-of-the-owner'><span style={{ color: "red", fontSize: "15px" }}>Welcome, {userdata?.name}</span> </p>
                        </div>
                    </div>
                    <div className="share-posts-input">
                        <textarea ref={InputAreaForPosts} placeholder={`Whats in your mind, ${userdata?.name}?`} type="text" />
                    </div>
                    <div className="share-icons-methods">
                        <div className="extra-support-icons" style={{ gap: "10px", marginTop: "2%" }}>
                            <label htmlFor="files">
                                <div className="share icons-file" style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                                    <AiOutlineVideoCamera color='red' style={{ fontSize: "20px" }} />
                                    <span style={{ fontSize: "12px" }}>Share images or videos</span>
                                    <input type="file" onChange={(e) => { setPostImg(e.target.files[0]) }} name='postImage' id="files" className='file-upload-to-hide' />
                                </div>
                            </label>
                            <div className="share icons-file" style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                                <BiLocationPlus color='blue' style={{ fontSize: "20px" }} />
                                <span style={{ fontSize: "12px" }}>Add location</span>
                            </div>
                            <div className="share icons-file" style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                                <BiHappy color='red' style={{ fontSize: "20px" }} />
                                <span style={{ fontSize: "12px" }}>Emoji</span>
                            </div>
                        </div>
                        <div className="share-posts-btn">
                            <button onClick={sharePosts}>Share</button>
                        </div>
                    </div>
                </div>}
        </>
    )
}
