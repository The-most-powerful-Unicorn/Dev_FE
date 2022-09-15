import './css-lib/Footer.css';
import React from 'react'

function Footer() {
    return (
        <footer>
            <img src="img/footer_back.png" style={{width:"100%", height:"378px"}}/>
            <img className="footerlogo" src="img/logo-2.png" alt="theo_logo" />
            <ul className="footer1">
                <li>상호명 : THEO</li>
                <li>사업자등록번호 : 206-86-83224</li>
                <li>호스팅 제공자 : AWS</li>
                <li>통신판매신고번호 : 제2020-제주-01759호</li>
                <br/>
                <li>주소 : 제주특별자치도 제주시 오라동 1770</li>
                <li>E-mail: contact@theo.co.kr</li>
            </ul>
            <div className="inc">© THEO, Inc.</div>
            <ul className="footer2">
                <li><a href="1">이용약관</a></li>
                <li><a href="2">개인정보처리방침</a></li>
                <li><a href="3">FAQ</a></li>
            </ul>
        </footer>
    );
}

export default Footer;