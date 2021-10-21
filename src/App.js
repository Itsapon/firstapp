//imports
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import Aboutpage from "./pages/Aboutpage";
import Navbar from "./components/Navbar";

//body

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hi there</h1>
        <div>
          <Navbar />
          <Switch>
            <Route path="/discover" component={DiscoverMoviesPage} />
            <Route path="/about" component={Aboutpage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
