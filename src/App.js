import NavBar from "./components/navBar/NavBar";
import Logo from "./components/logo/Logo";
import "./App.css";
import PokemonList from "./components/list/PokemonList";

function App() {
  return (
    <div>
      <Logo />
      <NavBar />
      <PokemonList />
    </div>
  );
}

export default App;
