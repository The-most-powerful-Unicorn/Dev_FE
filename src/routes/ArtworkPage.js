import React, { Component, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import '../css-lib/ArtInfo.css'


function ArtworkPage() {
    const { id } = useParams();

    const [artworks, setArtworks] = useState([]);
    const getArtwokrs = async () => {
        const json = await (
            await fetch(
                `http://15.164.134.237:8080/artwork?num=${id}`
            )
        ).json();
        setArtworks(json);
    };
    useEffect(() => {
        getArtwokrs();
    }, []);

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

    console.log(artworks);
    console.log(exhi);

    // artworkCmSize: "116.8*91.0㎝"
    // artworkDate: 2022
    // artworkImgUrl: "https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/artwork/NaGoonSun02.png"
    // artworkInfo: " "
    // artworkMaterial: "캔버스에 아크릴"
    // artworkName: "24/7 OPEN"
    // artworkNum: 2
    // artworkPrice: 1500000
    // artworkPrice: *0.03
    // artworkSize: 50

    const artworkSell = artworks.artworkPrice * 1;
    const artworkRental = artworks.artworkPrice * 0.03;

    // artworkSell.toLocaleString();
    // artworkRental.toLocaleString();


    return (
        <div className="body">
            <br /><br /><br />
            <div className="container">
                <div className="side"><img src={artworks.artworkImgUrl}
                    style={{
                        height: "500px"
                    }}
                /></div>
                <h2 className="item1">{artworks.artworkName}</h2>
                <h3 className="item2">{artworks.artworkMaterial}</h3>
                <h3 className="item3">작품정보 <p>{artworks.artworkMaterial}</p><p>{artworks.artworkCmSize}</p></h3>
                <a className="item3">렌탈하기</a><a className="item4">구매하기</a>
                <div className="item5"><p>렌탈가 {artworkRental.toLocaleString()}원</p></div>
                <div className="item6"><p>판매가 {artworkSell.toLocaleString()}원</p></div>
            </div>
            <div className="container">
                <h2 className="head">인태리어 해보기</h2>
                <div className="side preView"><img
                    style={{ height: "100px" }}
                    src={artworks.artworkImgUrl} />
                    
                </div>
                <div className="item1">
                <img className='button_interior' src='../img/interior01Living.jpg' />

                </div>
                
            </div>

            <div className="">{artworks.artworkInfo}</div>

        </div>
    );
}

export default ArtworkPage;