import React, { Component, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import '../css-lib/ArtInfo.css'
import '../css-lib/nonPageScroll.css'

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

    const bgImgURL =
      "../img/interior01Living.jpg";

    const [preImg, setPreImg] = useState(bgImgURL);

    const imgChange = (bgImg) => {
        setPreImg(bgImg);
        console.log(bgImg);
    };

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
                <div className="side preView"
                    style={{ height: "100vh",
                    width:"50vw",
                    backgroundImage:`url(${preImg})` }}>
                    <img
                    style ={{height:"30vh",
                }} 
                    src={artworks.artworkImgUrl}  />
                </div>
                <div className="button_wrap">
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior01Living.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior01Living.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior02Shop.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior02Shop.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior03Room.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior03Room.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior04Desk.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior04Desk.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior05Bed.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior05Bed.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior06Bed2.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior06Bed2.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior07Dining.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior07Dining.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior08Office.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior08Office.jpg' />
                        </button>
                    </div>
                    <div className="" >
                        <button onClick = { ()=> imgChange('../img/interior09Black.jpg')}>
                            <img 
                            className='button_interior' 
                            src='../img/interior09Black.jpg' />
                        </button>
                    </div>
                    
                </div>
            </div>

            <div className="">{artworks.artworkInfo}</div>

        </div>
    );
}

export default ArtworkPage;