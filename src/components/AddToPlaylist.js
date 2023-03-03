import React, { useState } from "react";
import Heart from "react-heart";

const AddToPlaylist = ({ data, songid }) => {
  const [active, setActive] = useState(false);
  let selected;

  const handleClick = () => {
    setActive(!active);
    const playlistData = data.filter((object) => object.id == songid);
    selected = playlistData;
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
