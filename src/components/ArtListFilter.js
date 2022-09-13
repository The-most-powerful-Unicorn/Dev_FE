import './artListFilter.css';
import React from 'react'

function ArtListFilter() {
    return (
        <div class="artListFilter">
            <ul class="artListFilter-1">
                <li id='ALF' class="artListFilterNew"><a href="">최신등록순</a></li>
                <li id='ALF2' class="artListFilterGana"><a href="">가나다순</a></li>
            </ul>
            <div class="artListFilter-choice">
                <ul class="artListFilter-han">
                    <li><a href="">ㄱ</a></li>
                    <li><a href="">ㄴ</a></li>
                    <li><a href="">ㄷ</a></li>
                    <li><a href="">ㄹ</a></li>
                    <li><a href="">ㅁ</a></li>
                    <li><a href="">ㅂ</a></li>
                    <li><a href="">ㅅ</a></li>
                    <li><a href="">ㅇ</a></li>
                    <li><a href="">ㅈ</a></li>
                    <li><a href="">ㅊ</a></li>
                    <li><a href="">ㅋ</a></li>
                    <li><a href="">ㅌ</a></li>
                    <li><a href="">ㅍ</a></li>
                    <li><a href="">ㅎ</a></li>
                    <li><a href="">ㅅ</a></li>
                    <li><a href="">ㅇ</a></li>
                </ul>
                <ul class="artListFilter-eng">
                    <li><a href="">A</a></li>
                    <li><a href="">B</a></li>
                    <li><a href="">C</a></li>
                    <li><a href="">D</a></li>
                    <li><a href="">E</a></li>
                    <li><a href="">F</a></li>
                    <li><a href="">G</a></li>
                    <li><a href="">H</a></li>
                    <li><a href="">I</a></li>
                    <li><a href="">J</a></li>
                    <li><a href="">K</a></li>
                    <li><a href="">L</a></li>
                    <li><a href="">M</a></li>
                    <li><a href="">N</a></li>
                    <li><a href="">O</a></li>
                    <li><a href="">P</a></li>
                    <li><a href="">Q</a></li>
                    <li><a href="">R</a></li>
                    <li><a href="">S</a></li>
                    <li><a href="">T</a></li>
                    <li><a href="">U</a></li>
                    <li><a href="">V</a></li>
                    <li><a href="">W</a></li>
                    <li><a href="">X</a></li>
                    <li><a href="">Y</a></li>
                    <li><a href="">Z</a></li>
                </ul>
            </div>
            <hr class="filterBorder" />
    </div>
    );
}

export default ArtListFilter;