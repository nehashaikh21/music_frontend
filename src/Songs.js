import react, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Sidebar from './components/Sidebar';
import Heart from "react-heart";
import StickyBox from "react-sticky-box";


function Songs() {
    const [song, setSong]= useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("black");
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        setLoading(true)
        const fetchMusic = () =>{
        fetch("https://soundthree-backend.herokuapp.com/data")
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setSong(data)})
            .catch((error) => console.log(error))
        }    
        console.log(fetchMusic())
      }, []);

      useEffect(()=>{
        setLoading(false)
    },[song])

    const handleColor = () =>{
      setColor("#dc4343");
    }
    return(
            <Container>
              <StickyBox>
              <Sidebar/>
              </StickyBox>
              <h2 className="font-link">Top Sounds</h2>
                  <div>{song && song.map((sg, i) => {
                    return(
                      <>
                        <Row key={i} className="song">
                            <Col><img className="rounded shadow" src={sg.image} /></Col>
                            <Col>{sg.title}</Col> 
                            <Col>{sg.singer}</Col>
                            <Col><audio style={{ width:"100px" }} src={sg.url} controls controlsList="nodownload noplaybackrate nomute"/></Col>
                            <Col> <div key={i} className="heart">
                                  <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.25}  />
                                  </div></Col>
                            <Col><Button variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                  </svg></Button></Col>
                        </Row>
                        </>
                    )
                })}
             </div>       
            
            </Container>
        
    
    )
}

export default Songs;
