import React, { useState, useEffect } from "react";
import Heart from "react-heart";

const AddToPlaylist = ({ data, songid }) => {
  const [active, setActive] = useState(false);
  let selected = [];

  const saveToLocalStorage = (items) => {
    localStorage.setItem("add-to-playlist", JSON.stringify(items));
  };

  const handleClick = () => {
    setActive(!active);
    const playlistData = data.filter((object) => object.id === songid);
    selected.push(playlistData);
    saveToLocalStorage(playlistData);
  };

  const favSongs = JSON.parse(localStorage.getItem("add-to-playlist"));

  return (
    <>
      <div className="heart">
        <Heart
          isActive={selected ? active : !active}
          onClick={(event) => handleClick(event, songid)}
          animationScale={1.25}
        />
      </div>
    </>
  );
};

export default AddToPlaylist;
