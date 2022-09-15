import './css-lib/Header.css';
import React, { useEffect, useState } from "react";
import './css-lib/button.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <nav id="header-wrap" className="cf">
                <h1 id="logo">
                            <Link to='/'>
                                <img
                                    src="./img/logo-2.png"/></Link>
                </h1>
                <ul id="header-nav">
                    <li><span className="header-navBtn ">About</span>
                        <ul className="header-sub-ul">
                            <li className="header-sub-li">서비스 소개</li>
                        </ul>
                    </li>
                    <li><span className="header-navBtn ">작가</span>
                        <ul className="header-sub-ul">
                            <li className="header-sub-li"><Link to='/ArtistList'>작가리스트</Link></li>
                            <li className="header-sub-li"><Link to='/'>작가공모</Link></li>
                        </ul>
                    </li>
                    <li><span className="header-navBtn ">작품</span>
                        <ul className="header-sub-ul">
                            <li className="header-sub-li"><Link to='/artWorks'>작품리스트</Link></li>
                            <li className="header-sub-li"><Link to='/'>테마별추천</Link></li>
                        </ul>
                    </li>
                    <li><span className="header-navBtn ">예술정보</span>
                        <ul className="header-sub-ul">
                            <li className="header-sub-li"><Link to='/Exhibition'>전시회</Link></li>
                            <li className="header-sub-li"><Link to='/Exhibition'>지원사업</Link></li>
                        </ul>
                    </li>
                    <li><span className="header-navBtn ">고객센터</span>
                        <ul className="header-sub-ul">
                            <li className="header-sub-li"><Link to='/Customer'>공지사항</Link></li>
                            <li className="header-sub-li"><Link to='/Customer'>FAQ</Link></li>
                            <li className="header-sub-li"><Link to='/Customer'>1:1문의</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul id="header-nav2">
                    <li>
                        <span className="header-icon "><img src='./img/heart_black.png' width='22' /></span>
                    </li>
                    <li>
                        <span className="header-icon"><img src='./img/shopping_black.png' width='22' /></span>
                    </li>
                    <li>
                        <span className="header-icon"><img src='./img/search_black.png' width='22' /></span>
                    </li>
                    <li>
                        <span className="header-icon btn btn-black">로그인</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
