import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./artists.module.css";

function Artists({id,artistProfileImg,artistName,artistEnName,artistSimpleIntro}) {
    return (
        <container className={styles.containerGrid}>
            <div className={styles.artists}>
                <img src={artistProfileImg} alt="artistPic" className={styles.artists_img}/>
                <div className={styles.info}>
                    <h2 className={styles.artists_name}>
                        <Link to={`/archiving/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>{artistName}</Link> 
                    </h2>
                    <p className={styles.artists_enName}>{artistEnName}</p>
                    {/* <hr className={styles.artists_border}></hr> */}
                    <p className={styles.artists_intro}>{artistSimpleIntro}</p>
                </div>
            </div>
        </container>
    );
}

Artists.propTypes = {
    id:PropTypes.number.isRequired,
    artistProfileImg:PropTypes.string.isRequired,
    artistName:PropTypes.string.isRequired,
    artistEnName:PropTypes.string.isRequired,
    artistSimpleIntro:PropTypes.string.isRequired,
};

export default Artists;