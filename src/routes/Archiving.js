import ArchivingList from "../components/ArchivingList.js"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Archiving() {
    const [loading, setLoading] = useState(true);
    const [archiving, setArchiving] = useState([]);
    const {id} = useParams();
    const getArchiving = async () => {
        const json = await (
            await fetch(`https://api.jaehyunking.com/artwork/artist?artistNum=${id}`)
            ).json();
            setArchiving(json);
            setLoading(false);
    };
    useEffect(() => {
        getArchiving();
    },[]);
    return (
        <div>
            {loading ? (
            <h1>Archiving...</h1>
            ) : (
                <div>
                    {archiving.map((archiving) => (
                    <ArchivingList 
                        key={archiving.id}
                        id={archiving.artworkNum}
                        artworkImg={archiving.artworkImg}
                        artworkName={archiving.artworkName}
                        artworkSize={archiving.artworkSize}
                        artworkCmSize={archiving.artworkCmSize}
                        artworkDate={archiving.artworkDate}
                    />
                    ))}
                </div>
            )}
        </div>
        );
}
export default Archiving;