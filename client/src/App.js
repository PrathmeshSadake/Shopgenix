import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import ProductDescriptionScreen from "./screens/ProductDescriptionScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductDescriptionScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
