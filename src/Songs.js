import react, {useState, useEffect} from "react";

function Songs() {
    const [song, setSong] = useState([]);
    const [loading, setLoading] = useState(true);
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

    return(
            <div className="song-list">
                  <div>{song && song.map((sg) => {
                    return(
                        <div className="song">
                            <div><img src={sg.image} /></div>
                            <div>{sg.title}</div> 
                            <div>{sg.singer}</div>
                            <div><audio src={sg.url} controls/></div>
                            <div>❤️</div>
                        </div>
                    )
                })}
             </div>       
            
            </div>
        
    
    )
}

export default Songs;
