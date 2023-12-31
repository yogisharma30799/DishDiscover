import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import { lazy, Suspense, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import Store from './utils/store';
import Cart from './Components/Cart';
import Footer from './Components/Footer';


const InstaMart = lazy(() => import("./Components/InstaMart"))

function App() {
  const [user, setUser] = useState({
    name: "yogeshwar",
    email: "roenfwefnwedn"
  })
  return (
    <Provider store={Store}>
      <UserContext.Provider value={{ user: user}}>
      <Header />
        <Outlet />
        <Footer/>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/footer",
        element: <Footer/>
      },
      {
        path: "/instamart",
        element:
          <Suspense fallback={ <h1>loading.....</h1> }>
            <InstaMart />
          </Suspense>
      
      },
    ]
  },
  
])