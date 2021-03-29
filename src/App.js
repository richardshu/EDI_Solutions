import { Switch, Route } from "react-router-dom";
import { Header, Footer, Animation } from "./components";
import { Home, About, Clients, Services, Contact } from "./components/pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="animated-banner-wrapper">
        <Animation></Animation>
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/clients" component={Clients} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
