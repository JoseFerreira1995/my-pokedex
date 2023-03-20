import NavBar from "./components/navBar/NavBar";
import Logo from "./components/logo/Logo";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
