import React, { useState, useEffect } from "react";
import Heart from "react-heart";

const AddToPlaylist = ({ data, songid }) => {
  const [active, setActive] = useState(false);
  const [favourites, setFavourites] = useState([]);

  let selected = [];

  const saveToLocalStorage = (items) => {
    localStorage.setItem("add-to-playlist", JSON.stringify(items));
  };

  const handleClick = () => {
    setActive(!active);
    const playlistData = data.filter((object) => object.id == songid);
    selected.push(playlistData);
    selected.concat();
    saveToLocalStorage(playlistData);
    console.log(selected);
  };

  return (
    <>
      <div className="heart">
        <Heart
          isActive={active}
          onClick={(event) => handleClick(event, songid)}
          animationScale={1.25}
        />
      </div>
    </>
  );
};

export default AddToPlaylist;
