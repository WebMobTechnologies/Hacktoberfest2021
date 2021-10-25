import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from './Component/Nav/Nav';
import Search from "./Component/Search/Search";

function App() {
  return (
    <>
    <Router>
      <div className="col-12">
      <Nav />
        <div className="container-fluid">
         <Search />
          </div>
      </div>
    </Router>
    
    </>
  );
}

export default App;
