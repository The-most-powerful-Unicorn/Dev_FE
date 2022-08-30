import './css-lib/Header.css';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link as Scroll } from "react-scroll";
import './css-lib/button.css'


const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};

function Header() {
    const { y } = useScroll();

    return (

        <header id="header"
            style={{ display: y > 100 ? "" : "none" }} >
            <nav id="header-wrap" class="cf">

                <ul id="header-nav">
                    <li>
                        <ul><img
                        src="./img/logo-2.png"
                            style={{
                                top: "",
                                left: "",
                                width: "25%",
                                height: "25%",
                            }} /></ul>
                    </li>
                    <li><span class="header-navBtn ">About</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><a href="">회사소개</a></li>
                            <li class="header-sub-li"><a href="">서비스소개</a></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">작가</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><a href="">작가리스트</a></li>
                            <li class="header-sub-li"><a href="">작가공모</a></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">작품</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><a href="">작품리스트</a></li>
                            <li class="header-sub-li"><a href="">테마별추천</a></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">예술정보</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><a href="">전시회</a></li>
                            <li class="header-sub-li"><a href="">지원사업</a></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">고객센터</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><a href="">공지사항</a></li>
                            <li class="header-sub-li"><a href="">FAQ</a></li>
                            <li class="header-sub-li"><a href="">1:1문의</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <span class="header-icon "><img src='./img/heart_black.png' width='30' /></span>
                    </li>
                    <li>
                        <span class="header-icon"><img src='./img/shopping_black.png' width='30' /></span>
                    </li>
                    <li>
                        <span class="header-icon"><img src='./img/search_black.png' width='30' /></span>
                    </li>
                    <li>
                        <span class="header-icon btn bg-black">로그인</span>
                    </li>
                    
                </ul>


            </nav>
        </header>
    );
}

export default Header;
