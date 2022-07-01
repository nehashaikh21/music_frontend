import { useEffect, useState } from "react";
import "./App.css";
import Songs from "./Songs";
import Navbar from "./Navbar";

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
