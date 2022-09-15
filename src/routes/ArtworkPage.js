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
    //artworkNum":1
    // artworkName":"해도(海圖)를 위한 관찰"
    // artistName":"라군선"
    // artworkInfo":"복합적인 감정과 생각의 선은 끊임없이 이어지며 타들어 가는 동안, 동시에 바닥에 앉아 침묵을 유지하며 가지는 생각의 시간에 파도가 어딘가에 부딪혀 내는 충돌의 소음만이 가득하다. 반복되는 소음들은 나열해둔 생각들을 어지럽게 흩트린다. 소리를 따라갔을 때 파도가 서로에게 부딪혀 내는 모양은 본래의 모습을 잃은 채 왜곡된 형상을 띄고, 다양한 모습으로 복사되며 발목부터 집어삼켜 바닷속으로 끌어들이려고 했다. 같은 자리에서 바다를 관찰한다. 시간은 계속해서 흐르지만, 바다를 관찰한다. 다만, 침묵을 지속하는 동안 파도의 소음에 휘둘리기보다는 이를 관찰하며 제 생각과 감정을 받아들이고 앞으로의 항해를 위해 해도(海圖)를 구체화 하는 것에 집중한다.

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

            <div className="containerAll">
                <div className="containerImg">
                    <img src={artworks.artworkImgUrl}
                        style={{
                            height: "500px",
                            maxWidth: "550px"
                        }}
                    />
                    <p className="copyright">Copyright © {artworks.artistName} All rights reserved.</p>
                </div>
                <div className="containerInfo">
                    <div className="containerInfo-subject">
                        <h1 className="containerInfo-subject1">{artworks.artworkName}</h1>
                        <h2 className="containerInfo-subject2">{artworks.artistName}</h2>
                    </div>
                    <div className="artworkInfo">
                        <div className="artworkInfo1">
                            <p className="artworkInfo1Left">작품정보</p>
                            <div className="artworkInfo1Middle">{artworks.artworkMaterial}<br/>{artworks.artworkCmSize}({artworks.artworkSize}호), {artworks.artworkDate}
                            </div>
                            <div className="artworkInfo1Right">
                                <a href=''><img src='../img/heartRound.png' style={{width:"40px", paddingRight:"8px"}}/></a>
                                <a href=''><img src='../img/share.png' style={{width:"40px"}}/></a>
                            </div>
                        </div>
                        <div>
                            <div className="button1">
                                <button className="buttonRental" type="button">렌탈하기</button>
                                <button className="buttonBuy">구매하기</button>
                            </div>
                            <div className="money1">
                                <p className="money1-1">렌탈가</p>
                                <p className="money1-2">월 {artworkRental.toLocaleString()}원</p>
                                <p className="money1-3">구매가</p>
                                <p className="money1-4">{artworkSell.toLocaleString()}원</p>
                            </div>
                            <div className="money2">
                                <p className="money2-1">렌탈기간</p>
                                <p className="money2-2">3개월</p>
                                <p className="money2-3">&nbsp;</p>
                                <p className="money2-4">&nbsp;</p>
                            </div>
                            <hr></hr>
                            <div className="money3">
                                <p className="money3-1">최종렌탈가</p>
                                <p className="money3-2">월 {artworkRental.toLocaleString()}원</p>
                            </div>
                            <div className="button2">
                                <button className="buttonSave" type="button">장바구니</button>
                                <button className="buttonBuy2" type="button">구매하기</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">{artworks.artworkInfo}</div>

        </div>
        
    );
}

export default ArtworkPage;