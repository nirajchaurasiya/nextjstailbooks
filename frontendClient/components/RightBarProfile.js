import Link from 'next/link'
import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineSend } from 'react-icons/ai'
export default function RightBarProfile({ userdata }) {
    const [showChatBox, setShowChatBox] = useState(false)
    const [msgBoxText, setMsgBoxText] = useState('Message')
    return (
        <div className="rightbarprofile-menu">
            <div className="rightbarprofile-menu-content">
                <div className="right-bar-box">

                    <div className="boxes">
                        <div className="profile-images">
                            <div className="profile-name" style={{ fontSize: "15px", marginTop: "8%" }}>
                                <b>Welcome again,</b> <b>Mr. {userdata?.name}</b>
                            </div>
                        </div>
                    </div>

                    <div className="boxes">
                        <span style={{ paddingBottom: "2%", fontSize: "13px" }}>{userdata?.aboutyourself}</span>
                        <div className="personal-details">

                            <b>From: <p>{userdata?.from}</p></b>
                            <b>City: <p>{userdata?.city}</p></b>
                            <b>Hobbies: <p>{userdata?.hobbies}</p></b>
                            <b>Contact Number: <p>{userdata?.phone}</p></b>
                            <b>Email: <p>{userdata?.email}</p></b>
                            <b>Relationship: <p>{userdata?.status}</p></b>

                        </div>
                        {/* <Link href='/chat/nirajchaurasiya/124e23e211221e2e'> */}
                        <button onClick={() => { setShowChatBox(!showChatBox); setMsgBoxText(showChatBox ? 'Message' : <RxCross1 style={{ color: "red", fontSize: "13px" }} />) }} className='msg-profile-box'>{msgBoxText}</button>
                        {/* </Link> */}
                    </div>

                    <hr className="hr-rightbarprofile-line" />
                    <div className='profile-friends'>
                        <p>User&apos;s Friends</p>
                        <div className="your-friends-profile">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 16, 17, 18, 19, 20].map((e) => {
                                return (
                                    <Link key={e} href={`/profile/${e}`} style={{ color: "var(--text-color)", textDecoration: "none" }}>
                                        <div>
                                            <div className="profile-images-user-friends">
                                                <img src="/profile2.jpeg" alt="" />
                                            </div>
                                            <div className="name-user-friends">
                                                <p>Ram Patel Choudhary</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    {showChatBox && <div className="chat-box-user-chat">
                        <div className="user-chat">
                            <div className='show-chat-box-toggle'>
                                <div className="top-chat-box">
                                    <img src="/profile2.jpeg" alt="" />
                                    <span>Niraj Chaurasiya</span>
                                </div>
                                <RxCross1 onClick={() => { setShowChatBox(!showChatBox); setMsgBoxText(showChatBox ? 'Message' : <RxCross1 style={{ color: "red", fontSize: "13px" }} />) }} style={{ color: "black", fontSize: "25px", cursor: "pointer", backgroundColor: "white", borderRadius: "50px", padding: "4px" }} />
                            </div>
                            <div className="hr-line-chat"></div>

                            <div className="input-box-send-chat">
                                <textarea type="text" name="" id="" placeholder='Enter message to send' />
                                <button><AiOutlineSend /></button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
