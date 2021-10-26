import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Recipes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
