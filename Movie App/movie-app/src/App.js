import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from './Component/Nav/Nav';
import Search from "./Component/Search/Search";
import Home from "./Page/Home/Home";
import MovieDetails from "./Page/MovieDetails/MovieDetails";

function App() {
  return (
    <>
    <Router>
      <div className="col-12">
      <Nav />
        <div className="container-fluid">
         <Search />
         <Home />
         <Home />
         <Home />
          </div>
      </div>
      <Route path="/MovieDetails">
      <MovieDetails />
    </Route>
    </Router>
    
    
    </>
  );
}

export default App;
