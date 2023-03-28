import React, { useState } from 'react'
import { AiFillDashboard, AiFillFlag, AiFillHighlight, AiFillHome, AiFillLike, AiFillSetting, AiFillVideoCamera, AiOutlineHistory, AiOutlineSearch, AiOutlineUsergroupAdd, AiTwotoneWallet } from 'react-icons/ai'
import { BiGroup } from 'react-icons/bi'
import Head from 'next/head'
import Link from 'next/link'
export default function Nav({ userdata }) {
    const [showProfileBtnClicked, setShowProfileBtnClicked] = useState(false)
    return (
        <>
            <Head>
                <title>Tailbook | Home</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <div className='navbar'>
                <div className="first-menu">
                    <Link href='/'>
                        <p className='logo'><img src="/logo.jpeg" alt="" /></p>

                    </Link>
                    <div className="search-box">
                        <div><input type="text" placeholder='search friends or videos or posts' className='search-input' /></div>
                        <div><button className='search-btn'><AiOutlineSearch /></button></div>
                    </div>
                </div>

                <div className="second-menu">
                    <ul>
                        <Link href='/'><li><AiFillHome /></li></Link>
                        <Link href='/watch/video'><li><AiFillVideoCamera /></li></Link>
                        <Link href='/findfriends'><li><BiGroup /></li></Link>
                        <li onClick={() => { setShowProfileBtnClicked(!showProfileBtnClicked) }}><img src={`/backend/${userdata.profile}`} alt="" />

                        </li>
                    </ul>
                </div>


            </div>
            {showProfileBtnClicked && <ul className="profile-togglebar">
                <Link href={`/profile/${userdata._id}`} style={{ textDecoration: "none" }}><li className='profile-toggle-bar'><img src={`/backend/${userdata.profile}`} alt="" />Niraj Chaurasiya</li></Link>
                <ul className="more-options-toggle-bar">
                    <li className='profile-togglebar-darkmode'><AiFillDashboard /> Dark Mode</li>
                    <li className='profile-togglebar-darkmode'><AiFillHighlight color='gray' /> Light Mode</li>
                    <li className='profile-togglebar-darkmode'><AiFillSetting color='green' />Settings</li>
                    <li className='profile-togglebar-darkmode'><AiFillFlag color='violet' />Manage Ads</li>
                    <li className='profile-togglebar-darkmode'><AiOutlineHistory color='red' /> History</li>
                    <li className='profile-togglebar-darkmode'><AiFillLike color='blue' /> Liked Posts</li>
                    <li className='profile-togglebar-darkmode'><AiTwotoneWallet color='pink' /> What&apos;s new?</li>
                </ul>
            </ul>}
        </>
    )
}
