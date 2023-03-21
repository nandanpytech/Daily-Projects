import {React,useState,useEffect} from 'react'

function Home() {
    const [post, setpost] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)

    const scrolling=async()=>{
        try{
            if(window.innerHeight+document.documentElement.scrollTop+1>document.documentElement.scrollHeight){
                setpage(prev=>prev+1)
            }
            setloading(true)
        }
        catch(err){
            console.log(err);
        }
       
    }

    const getdata=async()=>{
        const data=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${page}`)
        const res=await data.json();
        setpost([...post,...res])
        setloading(false)
       
    }

    useEffect(()=>{
        getdata()
    },[page])

    useEffect(() => {
        window.addEventListener("scroll",scrolling)
      return () => {
        window.removeEventListener("scroll",scrolling)
      }
    },)
    
  return (
    <>
    <div className="h">hii</div>
        {
            post.map((ele)=>{
               return <h1 key={ele.id} style={{marginBottom:"225px"}}>{ele.name}</h1>
            })
        }
        {loading && <h5>******************************************************************</h5> }

    </>
  )
}

export default Home