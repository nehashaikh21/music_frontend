import react, {useState, useEffect} from "react";


function Navbar() {
    // return <div className="navbar">
    const styles = {
        logo: {
            width: "200px", 
            height: "60px"
        }
      }
    
    return (
    <div className="Header">
    <div className="inner_header">
        <div className="logo_container" >
            <a href=""><img src="img/S3_Logo_aw.png" alt="SoundThree" style={styles.logo}/></a>
            {/* <!-- <h1>Sound<span>3</span></h1> --> */}
        </div>
        <ul className="navigation">
            <a href=""><li style={{ font:"Josefin Sans" }}>Home</li></a>
            <a href=""><li>Browse</li></a>
            <a href=""><li>Genres</li></a>
  
            <form action="" className="search_box">
                <input type="text" placeholder="Search"  id="" />
                {/* <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button> */}
            </form>
            
        </ul>
   </div>
   
  </div>

 ) }
export default Navbar;  