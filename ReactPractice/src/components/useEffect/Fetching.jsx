import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { datafetch } from '../axios'


function Fetching() {
    const [posts, setposts] = useState([])

    useEffect(()=>{
        const a=datafetch()
        console.log(a);
        // console.log(a.data)
        
    },[])
  return (
    <>
        {
            posts.map((e)=>{
                <p>{e.title}</p>
            })
        }
    </>
  
  )
}

export default Fetching