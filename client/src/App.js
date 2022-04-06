import Banner from './Components/Banner/Banner';

import './App.css';
import ProductsGrid from './Components/ProductsGrid/ProductsGrid';
// import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Banner />
      <ProductsGrid />
    </div>
  );
}

export default App;
