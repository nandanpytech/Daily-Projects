import Navbar from "./components/Navbar"
import HomeBody from "./components/HomeBody"
import {createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";


function App() {

  return (
    <div className="App">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export const route=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomeBody/>
       
      },
      {
        path: "/restaurant/:resid/:id",
        element: <RestaurantMenu/>
       
      },
      {
        path: "/cart/:id",
        element:<Cart/>
       
      },
    ],
  }
])

export default App
