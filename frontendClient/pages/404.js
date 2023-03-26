import Link from 'next/link'
export default function Error() {

    return (
        <div className='error-page'>
            <h1>404</h1>
            <b>The requested page could not be found on this server.</b>
            <Link href='/'>
                <button className='error-page-btn'>
                    Go To Homepage
                </button>
            </Link>
        </div>
    )
}
