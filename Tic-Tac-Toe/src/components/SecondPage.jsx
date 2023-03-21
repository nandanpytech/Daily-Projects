import {React,useState} from 'react'
import Square from './Square'
import { AccountContext } from '../context/Provider'
import { useContext } from 'react'
import Shifting from './Shifting';

function SecondPage() {
    const {selectedO}=useContext(AccountContext);
    const [nextX, setnextX] = useState(selectedO)
    const [winner, setwinner] = useState(null)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            setwinner(squares[b])
            
          }
        }
      }

    const handleclick=(num)=>{
        const newsquares={...squares}
        if(!nextX){
            newsquares[num]="X"
        }else{
            newsquares[num]="O"
        }
        setSquares(newsquares)
        setnextX(!nextX)
        calculateWinner(newsquares)
    }
  return (
    <>
    <Shifting nextX={nextX} setnextX={setnextX}></Shifting>
    <div className="boxs">
            <div className="first">
                <Square value={squares[0]} onsquareclick={()=>handleclick(0)}/>
                <Square   value={squares[1]} onsquareclick={()=>handleclick(1)}/>
                <Square   value={squares[2]} onsquareclick={()=>handleclick(2)}/>
            </div>
            <div className="second">
                <Square  value={squares[3]} onsquareclick={()=>handleclick(3)}/>
                <Square  value={squares[4]} onsquareclick={()=>handleclick(4)}/>
                <Square   value={squares[5]} onsquareclick={()=>handleclick(5)}/>
            </div>
            <div className="third">
                <Square   value={squares[6]} onsquareclick={()=>handleclick(6)}/>
                <Square   value={squares[7]} onsquareclick={()=>handleclick(7)}/>
                <Square   value={squares[8]} onsquareclick={()=>handleclick(8)}/>
            </div>
    </div>
   
    </>
  )
}

export default SecondPage