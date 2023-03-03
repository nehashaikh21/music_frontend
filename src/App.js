import { useEffect, useState } from "react";
import "./App.css";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";
import { Routes, Route } from "react-router-dom";

function App() {
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchMusic = () => {
      fetch("https://musicbackend.onrender.com/data")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSong(data);
        })
        .catch((error) => console.log(error));
    };
    fetchMusic();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [song]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Songs song={song} />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
