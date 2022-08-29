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

function Header(){
    const { y } = useScroll();

    return(
      
      <header id="header"
      style={{display: y > 100? "":"none"}} >
      <nav id="header-wrap" class="cf">
      
          <ul id="header-nav">
          <li>
        <ul><img src="./img/logo-2.png" 
            style={{
              top:"-10vh",
              left:"-25vh",
              width:"25%",
              height:"25%",
              }}/></ul>
      </li>
      <li><span class="header-navBtn ">이용후기</span>
          <ul class="header-sub-ul">
              <li class="header-sub-li"><a href="">개인고객</a></li>
              <li class="header-sub-li"><a href="">법인고객</a></li>
              <li class="header-sub-li"><a href="">셀럽인터뷰</a></li>
          </ul>
      </li>
      <li><span class="header-navBtn ">렌탈하기</span>
          <ul class="header-sub-ul">
              <li class="header-sub-li"><a href="">그림렌탈</a></li>
              <li class="header-sub-li"><a href="">법인상담</a></li>
              <li class="header-sub-li"><a href="">기프트카드</a></li>
          </ul>
      </li>
      <li><span class="header-navBtn ">이용후기</span>
          <ul class="header-sub-ul">
              <li class="header-sub-li"><a href="">개인고객</a></li>
              <li class="header-sub-li"><a href="">법인고객</a></li>
              <li class="header-sub-li"><a href="">셀럽인터뷰</a></li>
          </ul>
      </li>
  </ul>


      </nav>
      </header>
            

            /* <li><a >About</a>
                <ul>
                    <li><a >회사소개</a></li>
                    <li><a >서비스소개</a></li>
                </ul>
            </li>
            <li><a >작가</a>
                <ul>
                    <li><a >작가리스트</a></li>
                    <li><a >작가공모</a></li>
                </ul>
            </li>
            <li><a >작품</a>
                <ul>
                    <li><a >작품리스트</a></li>
                    <li><a >테마별추천</a></li>
                </ul>
            </li>
            <li><a >에줄정보</a>
                <ul>
                    <li><a >전시회</a></li>
                    <li><a >지원사업</a></li>
                </ul>
            </li>
            <li><a >고객센터</a>
                <ul>
                    <li><a >공지사항</a></li>
                    <li><a >1:1문의</a></li>
                    <li><a >FAQ</a></li>
                </ul>
            </li> */
    );
}

export default Header;
