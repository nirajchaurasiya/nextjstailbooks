import Body from '../Body'
import { useRouter } from 'next/router'
export default function Profile() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>
            <Body profile={true} userId={slug} />
        </div>
    )
}
