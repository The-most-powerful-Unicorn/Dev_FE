import Artists from "../components/Artists.js"
import ArtListFilter from "../components/ArtListFilter"
import {useState, useEffect} from "react";

function ArtistList(){
    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState([]);
    const getArtists = async () => {
        const json = await (
            await fetch(
            'http://15.164.134.237:8080/artist/artistList'
            )
        ).json();
        setArtists(json);
        setLoading(false);
    };
    useEffect(() => {
        getArtists();
    }, []); 
    return (
    <div>
        {loading ? (
        <h1>Loading...</h1>
        ) : (
            <div>
                <ArtListFilter />
                {artists.map((artists) => (
                <Artists 
                    key={artists.id}
                    id={artists.artistNum}
                    artistProfileImg={artists.artistProfileImg}
                    artistName={artists.artistName}
                    artistEnName={artists.artistEnName}
                    artistSimpleIntro={artists.artistSimpleIntro}
                />
                ))}
            </div>
        )}
    </div>
    );
}
export default ArtistList;