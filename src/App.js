import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Homescreen } from "./screens/Homescreen";
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Successone from "./components/Successone";
import Ordersscreen from "./screens/Ordersscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/success" exact element={<Successone />} />
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/cart" exact element={<CartScreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/orders" exact element={<Ordersscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
