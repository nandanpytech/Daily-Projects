import {React,useState} from 'react'

function Comments({comments,insertcomments}) {
    const [inputdata, setinputdata] = useState("")
    const [editmode, seteditmode] = useState(false)
    const [showinput, setshowinput] = useState(false)

    const addcomments=(check)=>{
     insertcomments(comments.id,inputdata)
     setinputdata("")
    check &&  setshowinput(!showinput)
    }
  return (
    <>
    {
        comments.id==1 ?
        <div className="input-box">
            <input type="text" onChange={(e)=>setinputdata(e.target.value)} value={inputdata} placeholder='Type something...'/>
            <button className='btn' onClick={()=>addcomments(false)}>Comment</button>
         </div>
         :
         <div className="comment-data">
         <span className='comment-name'>{comments.name}</span>
         <div className="editors">
            {
                editmode?
                <>
                    <p className="save">Save</p>
                    <p className="cancel" onClick={()=>seteditmode(false)}>Cancel</p>
                </>:
                <>  
                     <p className="save" onClick={()=>setshowinput(!showinput)}>Replay</p>
                     <p className="edit" onClick={()=>seteditmode(true)}>Edit</p>
                     <p className="delete">Delete</p>
                </>
            }
            
         </div>
     </div>
    }

    <div className="box" style={{paddingLeft:"25px"}}>
    {
            showinput && 
            <>
            <div className="reply-input">
             <input type="text" onChange={(e)=>setinputdata(e.target.value)} value={inputdata} placeholder='Type something...'/>
             <div className="editors">
              <p className="reply" onClick={()=>addcomments(true)}>Reply</p>
              <p className="cancel" onClick={()=>setshowinput(false)}>Cancel</p>
             </div>
            </div>

            </>
        }
        {
            comments.items.map((ele,index)=>{
                return <Comments insertcomments={insertcomments} key={index} comments={ele}/>
            })
        }
       
    </div>
   
       

      
    </>
  )
}

export default Comments