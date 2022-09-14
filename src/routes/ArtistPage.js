
import React, { useEffect, useState, useRef } from "react";

import ReactPageScoller from "react-page-scroller";
import Slider from "react-slick";

import ArtworksList from '../components/ArchivingList';

import { useParams } from 'react-router-dom';
import '../css-lib/button.css';
import '../css-lib/Scroll.css';
import '../css-lib/SlideViewAuto.css'
import '../App.css';

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

    console.log(artists);
    console.log(artworks);
    console.log({ id });

    const settings = {
        dots: true,
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
            <ReactPageScoller>
                <div className='block'>
                    <div className="Slide_Con">
                        <p>simple slider</p>
                        <div>
                        <h2>{artists.artistName}</h2>
                        <h2>{artists.artisEntName}</h2>
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
                <div className="block bg_img"
                    style={{
                        height: "100vh",
                        backgroundImage: `url(${artists.artistProfileImg})`
                    }}
                >

                    <div className="over_white">
                        <h2>{artists.artistName}</h2>
                        <h2>{artists.artisEntName}</h2>
                        <h2>{artists.artistIntro}</h2>
                    </div>
                </div>
                <div className="block">
                    전시회 정보
                </div>
                <div className="block">
                    History
                </div>
                <div className="block">
                    ArtWork
                    
                </div>
                <div>
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
            </ReactPageScoller>
        </div>
    )
};

export default ArtistPage;