import './App.css'
import CbRef from './components/CbRef'
import ClassCounter from './components/ClassCounter'
import Context1 from './components/context/Context1'
import Context2 from './components/context/Context2'
import Provider from './components/context/Provider'
import ParentForwardRef from './components/ParentForwardRef'
import Pure from './components/Pure'
import ReactMemmo from './components/ReactMemmo'
import Reffs from './components/Reffs'
import About from './components/Router/About'
import Home from './components/Router/Home'
import Unpure from './components/Unpure'
import Calllback from './components/useCallback/Calllback'
import CounterIncrease from './components/useEffect/CounterIncrease'
import Fetchdata from './components/useEffect/Fetchdata'
import Fetching from './components/useEffect/Fetching'
import Memo1 from './components/useMemo/Memo1'
import Memo2 from './components/useMemo/Memo2'
import Reducer1 from './components/useReducer/Reducer1'
import Reducer2 from './components/useReducer/Reducer2'
import Reducer3 from './components/useReducer/Reducer3'
import {
  createBrowserRouter,
  Outlet
} from "react-router-dom";
import Error from './components/Router/Error'
import Contact from './components/Router/Contact'
import Header from './components/Router/Header'
import Restaurant from './components/Router/Restaurant'

function App() {
  return (
    <>  
    {/* <Unpure/> */}
    {/* <Reffs/> */}
    {/* <CbRef/> */}
    {/* <ParentForwardRef/> */}
    {/* <ClassCounter/> */}
    {/* <CounterIncrease/> */}
    {/* <ChildrenXY/> */}
    {/* <Fetchdata/> */}
    {/* <Fetchdata/> */}
    {/* <Reducer1/> */}
    {/* <Reducer2/>
    <Reducer3/> */}
    {/* <Provider>
      <Context1/>
      <Context2/>
    </Provider> */}
    {/* <Memo1/> */}
    {/* <Calllback/> */}    
 
    <Header/>
    <Outlet/>

    </>

  )
};

 export const root=createBrowserRouter(
  [
    {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
     
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<Restaurant/>
      },
    ]
    },
    
   
  ]
)

export default App
