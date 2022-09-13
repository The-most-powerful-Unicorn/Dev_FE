import ArtWorksList from "../components/ArtWorksList.js"
import {useState, useEffect} from "react";
import styles from "./artworks.css";

function ArtWorks(){
    const [loading, setLoading] = useState(true);
    const [artWorks, setArtWorks] = useState([]);
    const getArtWorks = async () => {
        const json = await (
            await fetch(
            'http://15.164.134.237:8080/artwork/list'
            )
        ).json();
        setArtWorks(json);
        setLoading(false);
    };
    useEffect(() => {
        getArtWorks();
    }, []); 
    return (
    <div
    style={{display: "flex" , justifycontents: "center", alignItem : "center"}}>
        {loading ? (
        <h1>artworks</h1>
        ) : (
            <div
            style={{width:"1370px", margin:"0 auto"}}>
                {artWorks.map((artWorks) => (
                <ArtWorksList 
                    key={artWorks.id}
                    id={artWorks.artworkNum}
                    artworkName={artWorks.artworkName}
                    artworkImg={artWorks.artworkImg}
                    artistName={artWorks.artistName}
                />
                ))}
            </div>
        )}
    </div>
    );
}
export default ArtWorks;