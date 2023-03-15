import React, { useState, useEffect } from "react";
import Songs from "./Songs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Sidebar from "./Sidebar";
import StickyBox from "react-sticky-box";
import RemoveFromPlaylist from "./RemoveFromPlaylist";

const Playlist = (data) => {
  let playlistData;
  let favSongs;
  let songdata = data.song;
  console.log(songdata);
  const [visible, setVisible] = useState(true);

  favSongs = JSON.parse(localStorage.getItem("add-to-playlist"));

  for (let i = 0; i < favSongs.length; i++) {
    playlistData = songdata.filter((object) => object.id === favSongs[i].id);
    console.log(playlistData);
  }

  const removeFromPlaylist = () => {
    setVisible(false);
  };

  return (
    <Container>
      <div className="Header">
        <div className="inner_header">
          <div className="logo">
            <h1>
              Music<span>Box</span>
            </h1>
          </div>
        </div>
      </div>
      <StickyBox>
        <Sidebar />
      </StickyBox>
      <h2 className="font-link">Top Sounds</h2>
      <div>
        {visible &&
          playlistData.map((sg, i) => {
            return (
              <>
                <Row key={i} className="song">
                  <Col>
                    <img className="rounded shadow" src={sg.image} />
                  </Col>
                  <Col>{sg.title}</Col>
                  <Col>{sg.singer}</Col>
                  <Col>
                    <audio
                      style={{ width: "100px" }}
                      src={sg.url}
                      controls
                      controlsList="nodownload noplaybackrate nomute  noplaybackrate"
                    />
                  </Col>
                  <Col>
                    <div onClick={() => removeFromPlaylist(sg)}>
                      <RemoveFromPlaylist />
                    </div>
                  </Col>
                  <Col>
                    <Button variant="light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-share"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </Button>
                  </Col>
                </Row>
              </>
            );
          })}
      </div>
    </Container>
  );
};

export default Playlist;
