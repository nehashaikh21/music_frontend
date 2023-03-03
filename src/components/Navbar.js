import react, { useState, useEffect } from "react";

function Navbar(sg) {
  let songdata = sg.song;
  const [input, setInput] = useState(songdata);
  const [searchResult, setsearchResult] = useState(songdata);
  // console.log(songdata);
  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
    songdata = songdata.filter((s) =>
      s.title.toLowerCase().includes(input.toLowerCase())
    );
    setsearchResult(songdata);
  };

  return (
    <div className="Header">
      <div className="inner_header">
        <div className="logo">
          {/* <a href=""><img src="img/music.png" alt="SoundThree" style={styles.logo}/></a> */}
          <h1>
            Music<span>Box</span>
          </h1>
        </div>

        <form action="" onSubmit={handleSearch} className="search_box">
          <input
            type="input"
            placeholder="Search"
            id="input"
            value={input}
            onChange={handleSearch}
          />
          {/* <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button> */}
        </form>
      </div>
    </div>
  );
}
export default Navbar;
