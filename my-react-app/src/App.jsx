import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarPC from "./components/Navbar";
import SectionInfo from "./components/SectionInfo";
import Carrousel from "./components/Carrousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarPC></NavbarPC>
      <SectionInfo></SectionInfo>
      <Carrousel />
    </>
  );
}

export default App;
