export default function Profile({ userdata }) {
    return (
        <div className='profile-picture'>
            <div className="user-cover">
                <img src={`/backend/${userdata.profile}`} alt="" />
            </div>
            <div className="user-profile">
                <img src={`/backend/${userdata.profile}`} />
            </div>
            <div className="user-name">
                <b>{userdata?.name}</b>
                <p>{userdata?.shortquote}</p>
            </div>


        </div>
    )
}
