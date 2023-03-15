import { useEffect, useState } from "react";
import "./App.css";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "./components/Sidebar";
import RecentlyPlayed from "./components/RecentlyPlayed";

function App() {
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(true);

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
        <Route
          render={({ location, history }) => (
            <>
              <SideNavBar
                show={showNav}
                location={location}
                history={history}
              />
              {/* <Route path="/" exact component={(props) => <Songs />} />
              <Route path="/home" exact component={(props) => <Songs />} />
              <Route path="/recent" exact component={(props) => <Songs />} />
              <Route path="/playlist" component={(props) => <Playlist />} /> */}
            </>
          )}
        />
        <Route path="/" element={<Songs song={song} />}></Route>
        <Route path="/home" element={<Songs song={song} />} />
        <Route path="/playlist" element={<Playlist song={song} />}></Route>
        <Route path="/recent" element={<RecentlyPlayed song={song} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
