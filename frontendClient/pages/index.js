import axios from "axios";
import { useEffect, useState } from "react";
import Body from "./Body";
export default function Home() {
  const [allPosts, setAllPosts] = useState([])
  const fetchAllPosts = async () => {
    try {

      const res = await axios.get('/backend/api/posts/allposts')
      setAllPosts(res.data.msg.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }))

    } catch (error) {

    }
  }
  useEffect(() => {
    fetchAllPosts();
  }, [])
  return (
    <div className="">
      <Body allPosts={allPosts} />
    </div>
  )
}
