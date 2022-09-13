import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./artworks.module.css";

function ArtWorks({id,artworkImg,artistName,artworkName}) {
    return (
            <div className={styles.containerGrid}>
                <div className={styles.artists}>
                    <img src={artworkImg} alt="artPic" className={styles.artists_img}/>
                    <div className={styles.info}>
                        <h2 className={styles.artwork_name}>{artworkName}
                        </h2>
                        <h3 className={styles.artists_name}>
                            <Link to={`/archiving/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>{artistName}</Link> 
                        </h3>
                    </div>
                </div>
            </div>
    );
}

ArtWorks.propTypes = {
    id:PropTypes.number.isRequired,
    artworkImg:PropTypes.string.isRequired,
    artistName:PropTypes.string.isRequired,
    artworkName:PropTypes.string.isRequired,
};

export default ArtWorks;