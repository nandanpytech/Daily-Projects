import {React,useState} from 'react'
import Firstpage from './Firstpage'
import SecondPage from './SecondPage';


export default function Home() {
    const [mykey, setmykey] = useState(1)
    switch (mykey) {
        case 1:
            return  <Firstpage mykey={mykey} setmykey={setmykey}/>
        case 2:
            return <SecondPage mykey={mykey} setmykey={setmykey}/>
        default:
            break;
    }
}
