import Body from '../Body'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Profile() {
    const router = useRouter()
    const { slug } = router.query

    const [allPosts, setAllPosts] = useState([])
    const fetchAllPosts = async () => {
        try {
            const res = await axios.get(`/backend/api/posts/allposts/${slug}`)
            setAllPosts(res.data.msg.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }))

        } catch (error) {

        }
    }
    useEffect(() => {
        fetchAllPosts();
    }, [slug])

    return (
        <div>
            <Body profile={true} userId={slug} allPosts={allPosts} />
        </div>
    )
}