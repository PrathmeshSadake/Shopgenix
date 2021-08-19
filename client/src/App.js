import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import ProductDescriptionScreen from "./screens/ProductDescriptionScreen";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductDescriptionScreen} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
