import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';



function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

export const appRoute = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />
      },
    ]
  },
  
])