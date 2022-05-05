import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import CartWidget from "./Components/NavBar/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Esto es un saludo"} />
      </div>
  );
}

export default App;
