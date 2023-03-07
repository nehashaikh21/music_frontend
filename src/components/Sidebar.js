import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useLocation, useNavigate } from "react-router-dom";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

const SideNavBar = ({ location }) => {
  location = useLocation();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <SideNav
        className="sidebar"
        expanded="true"
        onSelect={(selected) => {
          const to = "/" + selected;
          if (location.pathname !== to) {
            navigate(to);
          }
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav
          style={{ paddingTop: "20px", backgroundColor: "#db3d44" }}
          // defaultSelected="home"
        >
          <NavItem eventKey="home">
            <NavIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="recent">
            <NavIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-music"
                viewBox="0 0 16 16"
              >
                <path d="M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
            </NavIcon>
            <NavText>Recently Played</NavText>
          </NavItem>
          <NavItem eventKey="playlist" href="/playlist">
            <NavIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-music-note-list"
                viewBox="0 0 16 16"
              >
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                <path
                  fill-rule="evenodd"
                  d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </NavIcon>
            <NavText>Playlist</NavText>
          </NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
        </SideNav.Nav>
      </SideNav>
    </React.Fragment>
  );
};

export default SideNavBar;
