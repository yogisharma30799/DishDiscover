import './App.css';
import Header from './Components/Header';
import { RestaurantCard } from './Components/Body';
import { RestaurantsData } from './Components/Config';

function App() {
  return (
    <>
      <Header />
      <RestaurantCard RestaurantsData={RestaurantsData} />
    </>
  );
}

export default App;
