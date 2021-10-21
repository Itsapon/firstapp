//imports
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import Aboutpage from "./pages/Aboutpage";
import Navbar from "./components/Navbar";
import Detailpage from "./pages/Detailpage";

//body

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hi there</h1>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact={true}
              path="/discover"
              component={DiscoverMoviesPage}
            />
            <Route exact={true} path="/about" component={Aboutpage} />
            <Route exact={true} path="/" component={Homepage} />
            <Route exact={true} path="/movie/:id" component={Detailpage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
