import './App.css'
import Comments from './components/Comments'

function App() {
  const data={
    id:1,
    items:[
      {
        id:241,
        name:"Reactjs",
        items:[
          {
            id:242,
            name:"Javascriptjs",
            items:[
              {
                id:243,
                name:"Vuejs",
                items:[]
              }
            ]
          }
        ]
      },
      {
        id:244,
        name:"Python",
        items:[

        ]
      }
    ]
  }

  return (
    <div className="App">
        <Comments comments={data}/>
    </div>
  )
}

export default App
