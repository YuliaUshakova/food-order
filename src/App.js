import './App.css';
import AllCategories from './AllCategories/AllCategories';
import Cart from './Cart/Cart';
import Dishes from './Dishes/Dishes';

function App() {
  return (
    <div className="App">
     <div className="block">
      <AllCategories/>
      <Cart />
     </div>
     <div className="block">
      <Dishes/>
     </div>
    </div>
  );
}

export default App;
