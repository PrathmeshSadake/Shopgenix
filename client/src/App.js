import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import ProductDescriptionScreen from "./screens/ProductDescriptionScreen";
import CartScreen from "./screens/CartScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SaleBanner from "./components/SaleBanner";

function App() {
  return (
    <div>
      {/* <SaleBanner /> */}
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/products" component={ProductsScreen} />
        <Route exact path="/product/:id" component={ProductDescriptionScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/signup" component={RegistrationScreen} />
        <Route exact path="/signin" component={LoginScreen} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
