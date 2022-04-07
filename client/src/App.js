import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Visual/Home";
import Form from "./Components/Form/Form";
import Edit from "./Components/Edit/Edit";
import NavBar from "./Components/NavBar/NavBar"
import Catalog from "./Components/Catalog/Catalog";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/add" element={<Form />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
