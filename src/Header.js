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
            <nav id="header-wrap" class="cf">
                <ul id="header-nav">
                    <li>
                        <ul>
                            <Link to='/'>
                                <img
                                    src="./img/logo-2.png"
                                    style={{
                                        top: "",
                                        left: "",
                                        width: "25%",
                                        height: "25%",
                                    }} />
                            </Link></ul>
                    </li>
                    <li><span class="header-navBtn ">About</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><Link to=''>회사소개</Link></li>
                            <li class="header-sub-li"><Link to=''>서비스소개</Link></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">작가</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><Link to=''>작가리스트</Link></li>
                            <li class="header-sub-li"><Link to=''>작가공모</Link></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">작품</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><Link to=''>작품리스트</Link></li>
                            <li class="header-sub-li"><Link to=''>테마별추천</Link></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">예술정보</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><Link to=''>전시회</Link></li>
                            <li class="header-sub-li"><Link to=''>지원사업</Link></li>
                        </ul>
                    </li>
                    <li><span class="header-navBtn ">고객센터</span>
                        <ul class="header-sub-ul">
                            <li class="header-sub-li"><Link to=''>공지사항</Link></li>
                            <li class="header-sub-li"><Link to=''>FAQ</Link></li>
                            <li class="header-sub-li"><Link to=''>1:1문의</Link></li>
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
                        <span class="header-icon btn btn-black">로그인</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
