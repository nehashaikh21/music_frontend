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
            <a href=""><li>Home</li></a>
            <a href=""><li>Browse</li></a>
            <a href=""><li>Genres</li></a>
  
            <form action="" className="search_box">
                <input type="text" placeholder="Search" id="" />
                <button type="submit">🔎︎</button>
            </form>
        </ul>
   </div>
  </div>

 ) }
export default Navbar;  