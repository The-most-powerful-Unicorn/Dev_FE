import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./artists.module.css";

function ArchivingList ({id,artworkImg,artworkName,artworkSize,artworkCmSize,artworkDate}) {
    return (
        <container className={styles.containerGrid}>
            <div className={styles.artists}>
            <Link to={`/ArtistPage/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <img src={artworkImg} alt="artistPic" className={styles.artists_img}/>
                </Link> 
                <div className={styles.info}>
                    <h2 className={styles.artists_name}>
                       {artworkName}
                    </h2>
                    <p className={styles.artworkInfo}>{artworkSize}호({artworkCmSize}), {artworkDate}</p>
                </div>
            </div>
        </container>
    );
}

ArchivingList.propTypes = {
    id:PropTypes.number.isRequired,
    artworkImg:PropTypes.string.isRequired,
    artworkName:PropTypes.string.isRequired,
    artworkSize:PropTypes.number.isRequired,
    artworkCmSize:PropTypes.string.isRequired,
    artworkDate:PropTypes.number.isRequired,
};

export default ArchivingList;