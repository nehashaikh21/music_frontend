import { useEffect, useState } from "react";
import "./App.css";
import Songs from "./components/Songs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Songs />
      </div>
    </div>
  );
}

export default App;
