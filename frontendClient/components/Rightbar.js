import React from 'react'
import { AiOutlinePlus, AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
export default function Rightbar() {
    const [showChatBox, setShowChatBox] = useState(false)
    const [msgBoxText, setMsgBoxText] = useState('Message')
    return (
        <div className="rightbar-menu">
            <div className="rightbar-menu-content">
                <div className="right-bar-box">

                    <div className="boxes">
                        <div className="profile-images">
                            <div className="profile-name" style={{ fontSize: "15px", marginTop: "8%" }}>
                                <b>Ram Tiwari</b> and <b>24 others</b> have birthday today
                            </div>
                        </div>
                    </div>

                    <div className="boxes">
                        <div className="ad-images">
                            <img src="/ads.jpeg" alt="" />
                            <p style={{ textAlign: 'right', fontSize: "13px", display: "flex", justifyContent: "right", alignItems: "center" }}><AiOutlinePlus /> ads</p>
                        </div>
                    </div>

                    <hr className="hr-rightbar-line" />
                    <div className="online-friends">
                        <p>Online Friends</p>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
                            return (
                                <div key={e} className="online-friends-box" onClick={() => { setShowChatBox(!showChatBox); setMsgBoxText(showChatBox ? 'Message' : <RxCross1 style={{ color: "red", fontSize: "13px" }} />) }}>
                                    <div className="online-friends-img">
                                        <img src="/ads.jpeg" alt="" />
                                        <span className='green-color-photo-online'></span>
                                    </div>
                                    <div className="online-friends-name">
                                        <span>Niraj Chaurasiya</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {showChatBox && <div className="chat-box-user-chat">
                        <div className="user-chat">
                            <div className='show-chat-box-toggle'>
                                <div className="top-chat-box">
                                    <img src="/profile2.jpeg" alt="" />
                                    <span>Niraj Chaurasiya</span>
                                </div>
                                <RxCross1 onClick={() => { setShowChatBox(!showChatBox); setMsgBoxText(showChatBox ? 'Message' : <RxCross1 style={{ color: "red", fontSize: "13px" }} />) }} style={{ color: "black", fontSize: "20px", cursor: "pointer" }} />
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
