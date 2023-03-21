import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Fetchdata() {
    const [posts, setposts] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then(res=>res.json())
        .then(res=>setposts(res))
    },[])
  return (
    <>
        {
            posts.map((e)=>{
               return <p>{e.name}</p>
            })
        }
    </>
  
  )
}

export default Fetchdata