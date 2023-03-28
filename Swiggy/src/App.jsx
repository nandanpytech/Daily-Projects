import Navbar from "./components/Navbar"
import HomeBody from "./components/HomeBody"
import {createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


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
        path: "/restaurant/:id",
        element: <RestaurantMenu/>
       
      },
    ],
  }
])

export default App
