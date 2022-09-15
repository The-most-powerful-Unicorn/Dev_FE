import React from "react";

import '../App.css'

// import '../css-lib/Customer.module.css'
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css';
// import 'https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap';

function Customer() {
    return (
        <body>
            <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 fst-italic">THEO 고객센터</h1>
                    <div class="col-sm-6">
                        <label for="inquiry" class="form label">자주하는 질문 검색</label>
                        <input type="text" class="form-control" id="inquiry" />
                    </div>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" />
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">고객</strong>
                        <h3 class="mb-0">렌탈은 어떤 방식으로 이루어지나요?</h3>
                        <div class="mb-1 text-muted">9/14</div>
                        <p class="card-text mb-auto">렌탈방식 설명스</p>
                        <a href="#" class="stretched-link">자세히</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250" src="https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/artwork/NaGoonSun02.png" />
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">고객</strong>
                        <h3 class="mb-0">제 작품도 올리고 싶어요</h3>
                        <div class="mb-1 text-muted">9/13</div>
                        <p class="card-text mb-auto">저희 THEO는 더 나은 미술 생태계를 함께 이끌어 나갈 작가님들을 기다리고 있습니다. 역량 있는 작가들이 실력만으로 작품 활동에만 집중할 수 있도록 작품 등록과 전시 홍보, 렌탈 및 판매 시 필요한 서비스를 지원합니다.</p>
                        <a href="#" class="stretched-link">자세히</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250" src="https://s3.ap-northeast-2.amazonaws.com/theo.artwork.sss.bucket/Artist/%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC.png" />
                    </div>
                </div>
            </div>
        </body>

    );
}

export default Customer;