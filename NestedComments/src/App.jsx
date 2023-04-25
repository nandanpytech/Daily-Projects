import { useEffect, useState } from 'react'
import './App.css'
import Comments from './components/Comments'
import useNode from './hooks'

function App() {
  const data={
    id:1,
    items:[]
  }
  const [commentsdata, setcommentsdata] = useState(data)
  const {insertnode}=useNode()

  const insertcomments=(commentid,item)=>{
    const updateddata=insertnode(commentsdata,commentid,item)
    setcommentsdata(updateddata)

  }

  return (
    <div className="App">
        <Comments
         comments={commentsdata}
         insertcomments={insertcomments}
         />
    </div>
  )
}

export default App
