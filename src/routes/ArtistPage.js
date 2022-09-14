
import React, { useEffect, useState, useRef } from "react";

import ReactPageScoller from "react-page-scroller";
import Slider from "react-slick";

import ArtworksList from '../components/ArchivingList';
import TimeLine from '../components/TimeLine';

import { useParams } from 'react-router-dom';
import '../css-lib/button.css';
import '../css-lib/Scroll.css';
import '../css-lib/SlideViewAuto.css';
import '../App.css';
import '../css-lib/TimeLine.css';
import '../css-lib/ArtistInfo.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function ArtistPage() {
    const { id } = useParams();
    const [artists, setArtists] = useState([]);
    const getArtists = async () => {
        const json = await (
            await fetch(
                `http://15.164.134.237:8080/artist?number=${id}`
            )
        ).json();
        setArtists(json);
    };
    useEffect(() => {
        getArtists();
    }, []);

    // artistEnName: "jubi"
    // artistIntro: "나는 제주도에 사는 주비야! 넓을 홍 + 쓰줍이 = 홍주비 앞으로 나와 함께 제주도 곳곳을 누비자"
    // artistName: "홍주비"
    // artistNum: 2
    // artistProfileImg: "https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/Artist/jubi.png"
    // artistSimpleIntro: "나는 제주도에 사는 주비야!"


    const [artworks, setArtworks] = useState([]);
    const getArtwokrs = async () => {
        const json = await (
            await fetch(
                `http://15.164.134.237:8080/artwork/artist?artistNum=${id}`
            )
        ).json();
        setArtworks(json);
    };
    useEffect(() => {
        getArtwokrs();
    }, []);  
    
    // {artworkNum: 2, artworkName: "24/7 OPEN", artistName: "라군선", artworkImg: "https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/artwork/NaGoonSun02.png"}
    // {artworkNum: 3, artworkName: "프레임의 이유", artistName: "라군선", artworkImg: "https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/artwork/NaGoonSun03.png"}
    // {artworkNum: 4, artworkName: "러브.01", artistName: "라군선", artworkImg: "https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/artwork/NaGoonSun04.png"}
    // {artworkNum: 1, artworkName: "해도(海圖)를 위한 관찰", artistName: "라군선", artworkImg: "https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/artwork/NaGoonSun01.png"}

    const [exhi, setExhi] = useState([]);
    const getExhi = async () => {
        const json = await (
            await fetch(
                `http://15.164.134.237:8080/exhibition/list?artistNum=${id}`
            )
        ).json();
        setExhi(json);
    };
    useEffect(() => {
        getExhi();
    }, []);  

// {exhibitionNum: 1, exhibitionName: "2022 아시아프 ASYAAF", artist: "라군선", exhibitionInfo: "국내 최대의 청년 미술 축제", exhibitionImg: "https://asyaaf.chosun.com/contest/guidelines.php", …}
// {exhibitionNum: 2, exhibitionName: "전시준비태세 - 제재(題材)를 위한 제재(制裁)", artist: "라군선", exhibitionInfo: "제주출신 신진작가 6인의 전시회", exhibitionImg: "https://asyaaf.chosun.com/images/common/blank_square.png", …}
// {exhibitionNum: 3, exhibitionName: "제주-창원 청년작가 교류전, 2021 OVERCOME 展", artist: "라군선", exhibitionInfo: "제주대학교와 창원대학교의 교류전", exhibitionImg: "https://cdn.news.unn.net/news/photo/202109/516317_318075_937.jpg", …}
// {exhibitionNum: 4, exhibitionName: "예술로 이아로", artist: "라군선", exhibitionInfo: "2021 미술주간, 예술로 이아로 – 아침여섯시", exhibitionImg: "http://www.artspaceiaa.kr/data/editor/2109/d73a6e0b805a2152aafdc304586b5b33_1632445980_5599.png", …}
// {exhibitionNum: 5, exhibitionName: "공성전", artist: "라군선", exhibitionInfo: "지역 청년 예술가 기획전", exhibitionImg: "http://cdn.jejuilbo.net/news/photo/202106/164553_106234_2419.jpg", …}
// {exhibitionNum: 6, exhibitionName: "키스타이밍과 스트로크의 관계 1부 – 잇따른 벌어짐", artist: "라군선", exhibitionInfo: "공간서울에서 열린 전시회", exhibitionImg: "https://asyaaf.chosun.com/images/common/blank_square.pn

// artist: "라군선"
// artistNum: 1
// date: "2022-07-26T00:00:00"
// exhibitionGallery: "홍익대학교 현대미술관"
// exhibitionImg: "https://asyaaf.chosun.com/contest/guidelines.php"
// exhibitionInfo: "국내 최대의 청년 미술 축제"
// exhibitionLocation: "서울"
// exhibitionName: "2022 아시아프 ASYAAF"
// exhibitionNum: 1



    console.log(artists);
    console.log(artworks);
    console.log(exhi);
    console.log({ id });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: "linear"
    };

    const state = {
        display: true,
        width: 100,
    }
    return (
        <div>
                <div className='block'>
                    <div className="empty"></div>
                    <div className="Slide_Con">
                        <div>
                            <div className="MainName">
                                    <h2>{artists.artistName}</h2>
                                    <h2>{artists.artistEnName}</h2>
                            </div>
                            <div>
                                <Slider {...settings}
                                >
                                    {artworks && artworks.map(artworks => {
                                        return (
                                            <div>
                                                <a href="">
                                                    <img src={artworks.artworkImg} />
                                                </a>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block bg_img ArtistInfo"
                    style={{
                        width: "100vw",
                        backgroundImage: `url(${artists.artistProfileImg})`
                    }}
                >
                    <div className="over_white inner">
                        <h2>{artists.artistName}</h2>
                        <h2>{artists.artistEnName}</h2>
                        <br/>
                        <div style={{
                            margine:""
                        }}>
                        <h2>{artists.artistIntro}</h2>
                        </div>
                        <a href=''><img src='../img/heartRound.png'/></a>
                        <a href=''><img src='../img/share.png'/></a>
                        <a href=''><img src='../img/email.png'/></a>
                        <a href=''><img src='../img/insta.png'/></a>
                    </div>
                </div>
                <div className="">
                <div class="cp_timeline04">
                {exhi.map((exhi) => (
                        <TimeLine 
                        exhiId={exhi.exhibtionNum} //1
                        exhiDate={exhi.date} //"2022-07-26T00:00:00"
                        exhiGallery={exhi.exhibitionGallery} //"홍익대학교 현대미술관"
                        exhiImg={exhi.exhibitionImg} //"https://asyaaf.chosun.com/contest/guidelines.php"
                        exhiInfo={exhi.exhibitionInfo} //"국내 최대의 청년 미술 축제"
                        exhiLocation={exhi.exhibitionLocation} //"서울"
                        exhiName={exhi.exhibitionName} //"2022 아시아프 ASYAAF"
                        />
                    ))}
                    </div>
                </div>
                <div className="">
                    ArtWork

                </div>
                <div style={{textAlign:"center"}}>
                    {artworks.map((artworks) => (
                        <ArtworksList
                            key={artworks.id}
                            id={artworks.artworkNum}
                            artworkImg={artworks.artworkImg}
                            artworkName={artworks.artworkName}
                            artworkSize={artworks.artworkSize}
                            artworkCmSize={artworks.artworkCmSize}
                            artworkDate={artworks.artworkDate}
                        />
                    ))}
                </div>
        </div>
    )
};

export default ArtistPage;