import {React} from 'react'
import { AccountContext } from '../context/Provider'
import { useContext } from 'react'

function Firstpage({mykey,setmykey}) {
    const {selectedO,setselectedO}=useContext(AccountContext)
    const handleclickO=(e)=>{
        setselectedO(true)
    }
    const handleclickX=(e)=>{
        setselectedO(false)
    }
  return (
    <>
    <h1>Welcome to Tic-Tac-Toe Game</h1>

<div className="choices">
    <p>Choose your Choices:</p>
    <div className="options">

        <span className="option1" onClick={(e)=>handleclickO(e)} style={{backgroundColor:selectedO?"green":"white"}}>O</span>
        <span className="option2"  onClick={(e)=>handleclickX(e)}  style={{backgroundColor:selectedO?"white":"green"}}>X</span>
    </div>
</div>

<button type="button" onClick={()=>setmykey(mykey+1)}  className="btn btn-primary">Continue</button>
    </>

  )
}

export default Firstpage