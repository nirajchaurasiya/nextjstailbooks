import React, { useState } from 'react'
import { MdAirlineSeatReclineNormal, MdCode, MdGroups, MdOndemandVideo, MdOutlineEmojiEvents, MdOutlineGroups2, MdOutlineSendAndArchive, MdRoom } from 'react-icons/md'
import { BiGroup, BiMusic } from 'react-icons/bi'
import { RiBuilding4Line, RiMessengerLine, RiMovie2Fill } from 'react-icons/ri'
import { AiFillAmazonCircle, AiOutlineAlipay, AiOutlineAmazon, AiOutlineAreaChart, AiOutlineCode, AiOutlineExperiment, AiOutlineFlag, AiOutlineNumber, AiOutlineSafetyCertificate, AiOutlineShopping, AiOutlineStar, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { CgGames } from 'react-icons/cg'
import Link from 'next/link'
export default function Sidebar({ userdata }) {
    const [btnClick, setBtnClick] = useState(false)
    const [btnText, setBtnText] = useState('Show More')
    const [showMoreShortcuts, setShowMoreShortcuts] = useState(false)
    const [btnTextForShortCuts, setBtnTextForShortCuts] = useState('Show More')
    const showMoreMenu = () => {
        setBtnClick(!btnClick)
        setBtnText(btnClick ? 'Show More' : "Show Less")

    }
    return (
        <div className="sidebar-menu">
            <div className="sidebar-menu-content">
                <div className="right-bar-box">

                    <Link href={`/profile/${userdata?._id}`} style={{ textDecoration: "none", color: "var(--text-color)" }}>
                        <div className="boxes">
                            <div className="profile-images">
                                <img src={`/backend/${userdata.profile}`} alt="" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                                <div className="profile-name">
                                    <p>{userdata?.name}</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="sidebar-icon-wrap-up">
                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <BiGroup color='red' />
                                </div>
                                <p className="profile-name">
                                    Find Friends
                                </p>
                            </div>
                        </div>


                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <MdOutlineGroups2 color="blue" />
                                </div>
                                <p className="profile-name">
                                    Your groups
                                </p>
                            </div>
                        </div>


                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <MdOutlineEmojiEvents color="green" />
                                </div>
                                <p className="profile-name">
                                    Events
                                </p>
                            </div>
                        </div>


                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <RiMessengerLine color='red' />
                                </div>
                                <p className="profile-name">
                                    Messenger
                                </p>
                            </div>
                        </div>

                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <CgGames color='blue' />
                                </div>
                                <p className="profile-name">
                                    Play games
                                </p>
                            </div>
                        </div>
                        {btnClick && <><div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <AiOutlineFlag color='violet' />
                                </div>
                                <p className="profile-name">
                                    Pages
                                </p>
                            </div>
                        </div>





                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineStar color='red' />
                                    </div>
                                    <p className="profile-name">
                                        Feeds
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <RiBuilding4Line color='brown' />
                                    </div>
                                    <p className="profile-name">
                                        Market Place
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <MdOndemandVideo color='blue' />
                                    </div>
                                    <p className="profile-name">
                                        Watch
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineAreaChart />
                                    </div>
                                    <p className="profile-name">
                                        Ads Manager
                                    </p>
                                </div>
                            </div>

                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineShopping color='red' />
                                    </div>
                                    <p className="profile-name">
                                        Shopping
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineCode color='blue' />
                                    </div>
                                    <p className="profile-name">
                                        Code
                                    </p>
                                </div>
                            </div>

                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineAlipay color='yellow' />
                                    </div>
                                    <p className="profile-name">
                                        Ali pay
                                    </p>
                                </div>
                            </div>

                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineAmazon />
                                    </div>
                                    <p className="profile-name">
                                        Buy Amazon
                                    </p>
                                </div>
                            </div>

                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineWhatsApp color='green' />
                                    </div>
                                    <p className="profile-name">
                                        Chat
                                    </p>
                                </div>
                            </div>

                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineTwitter color='blue' />
                                    </div>
                                    <p className="profile-name">
                                        On Twitter
                                    </p>
                                </div>
                            </div></>}

                    </div>
                    <button className="btn-show-more" onClick={showMoreMenu}>{btnText}</button>


                    <hr className="hr-sidebar-line" />
                    <p style={{ color: "gray", fontSize: "15px", fontWeight: "500" }}>Your Shortcuts</p>
                    <div className="sidebar-icon-wrap-up">
                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <AiFillAmazonCircle color='red' />
                                </div>
                                <p className="profile-name">
                                    Amazon -Buy or sell
                                </p>
                            </div>
                        </div>


                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <MdCode color="blue" />
                                </div>
                                <p className="profile-name">
                                    Programming
                                </p>
                            </div>
                        </div>


                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <MdRoom color="green" />
                                </div>
                                <p className="profile-name">
                                    Online Room Finder
                                </p>
                            </div>
                        </div>


                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <RiMovie2Fill color='red' />
                                </div>
                                <p className="profile-name">
                                    Movies - Watch
                                </p>
                            </div>
                        </div>

                        <div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <CgGames color='blue' />
                                </div>
                                <p className="profile-name">
                                    Play games
                                </p>
                            </div>
                        </div>
                        {showMoreShortcuts && <><div className="boxes">
                            <div className="profile-icon">
                                <div className="right-bar-icon">
                                    <BiMusic color='violet' />
                                </div>
                                <p className="profile-name">
                                    Listen Music
                                </p>
                            </div>
                        </div>





                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <MdAirlineSeatReclineNormal color='red' />
                                    </div>
                                    <p className="profile-name">
                                        Be Healthy
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineExperiment color='brown' />
                                    </div>
                                    <p className="profile-name">
                                        Science
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineNumber color='blue' />
                                    </div>
                                    <p className="profile-name">
                                        Mathematics
                                    </p>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineSafetyCertificate />
                                    </div>
                                    <p className="profile-name">
                                        Safety
                                    </p>
                                </div>
                            </div>

                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <MdOutlineSendAndArchive color='red' />
                                    </div>
                                    <p className="profile-name">
                                        Download
                                    </p>
                                </div>
                            </div>




                            <div className="boxes">
                                <div className="profile-icon">
                                    <div className="right-bar-icon">
                                        <AiOutlineWhatsApp color='green' />
                                    </div>
                                    <p className="profile-name">
                                        Your Groupchat
                                    </p>
                                </div>
                            </div>
                        </>}
                        <button className="btn-show-more" onClick={() => { setShowMoreShortcuts(!showMoreShortcuts); setBtnTextForShortCuts(showMoreShortcuts ? 'Show More' : "Show Less") }}>{btnTextForShortCuts}</button>

                    </div>



                </div>
            </div>
        </div >
    )
}
