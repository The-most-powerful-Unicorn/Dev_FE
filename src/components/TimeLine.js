import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css-lib/TimeLine.css";



function ArtWorks({
    exhiId
    , exhiDate
    , exhiGallery
    , exhiImg
    , exhiInfo
    , exhiLocation
    , exhiName
}) {
    return (
        // <div className={styles.containerGrid}>
        //     <div className={styles.artists}>
        //         <img src={artworkImg} alt="artPic" className={styles.artists_img}/>
        //         <div className={styles.info}>
        //             <h2 className={styles.artwork_name}>{artworkName}
        //             </h2>
        //             <h3 className={styles.artists_name}>
        //                 <Link to={`/archiving/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>{artistName}</Link> 
        //             </h3>
        //         </div>
        //     </div>
        // </div>
            <div
            style={{textAlign:"left"}}>
                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">2{exhiDate}</p>
                        <p class="flag">{exhiName}</p>
                    </div>
                    <div class="desc">
                        <p>{exhiInfo} </p>
                        <img src={exhiImg}
                        style={{ height: "30vh" }}
                    />
                    </div>
                </div>

                {/* <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">2017</p>
                        <p class="flag">タイトル</p>
                    </div>
                    <div class="desc">
                        <p>内容</p>
                    </div>
                </div>

                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">2016</p>
                        <p class="flag">タイトル</p>
                    </div>
                    <div class="desc">
                        <p>内容</p>
                    </div>
                </div> */}
            </div>



    );
}

ArtWorks.propTypes = {
    id: PropTypes.number.isRequired,
    artworkImg: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artworkName: PropTypes.string.isRequired,
};

export default ArtWorks;