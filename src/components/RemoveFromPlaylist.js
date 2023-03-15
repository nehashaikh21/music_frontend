import React, { useState, useEffect } from "react";
import Heart from "react-heart";

const RemoveFromPlaylist = ({ data, songid }) => {
  const [active, setActive] = useState(true);
  const [favourites, setFavourites] = useState([]);

  let selected = [];

  const removeFromLocalStorage = (items) => {
    localStorage.removeItem("add-to-playlist", JSON.stringify(items));
  };

  const handleClick = (sg) => {
    setActive(!active);
    // removeFromLocalStorage(sg);
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

export default RemoveFromPlaylist;
