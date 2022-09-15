// import React from 'react';

// import '../css-lib/About.css'


// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });


// function About() {
//     return (
//         <div>
//             <header class="masthead">
//                 <div class="container">
//                     <div class="masthead-subheading">Welcome To THEO!</div>
//                     <div class="masthead-heading text-uppercase">제주 로컬 예술가와 세상을 잇는 열쇠</div>
//                 </div>
//             </header>
//             {/* <!-- Services--> */}
//             <section class="page-section" id="services">
//                 <div class="container">
//                     <div class="text-center">
//                         <h2 class="section-heading text-uppercase">Services</h2>
//                         {/* <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
//                     </div>
//                     <div class="row text-center">
//                         <div class="col-md-4">
//                             <span class="fa-stack fa-4x">
//                                 <i class="fas fa-circle fa-stack-2x text-primary"></i>
//                                 <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <h4 class="my-3">구매 & 렌탈</h4>
//                             <p class="text-muted">제주 로컬 예술가들의 지속가능한 예술활동을 위해 판매와 렌탈 시스템을 통한 비즈니스 모델을 제공하며 고객들에게는 그림의 대여를 통해 합리적인 가격으로 그림을 경험할 수 있는 기회를 제공</p>
//                         </div>
//                         <div class="col-md-4">
//                             <span class="fa-stack fa-4x">
//                                 <i class="fas fa-circle fa-stack-2x text-primary"></i>
//                                 <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <h4 class="my-3">도슨트</h4>
//                             <p class="text-muted">작품과 함께 큐레이팅 즉, 도슨트를 함께 제공하며 이를 통해 작품에 대한 작가의 의도, 예술적 가치와 배경을 같이 설명함으로써 작품에 대한 이해를 높이며 작품에 몰입할 수 있도록 함 </p>
//                         </div>
//                         <div class="col-md-4">
//                             <span class="fa-stack fa-4x">
//                                 <i class="fas fa-circle fa-stack-2x text-primary"></i>
//                                 <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <h4 class="my-3">아카이빙</h4>
//                             <p class="text-muted">작품 아카이빙을 통해 포트폴리오를 구성할 수 있는 웹사이트를 제공하며 단순히 작품 나열 형식이 아닌, 작가가 걸어온 길과 추구하는 예술적 방향을 함께 보여줌으로써 작가에 대한 이해를 높임</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* <!-- Portfolio Grid--> */}
//             <section class="page-section bg-light" id="portfolio">
//                 <div class="container">
//                     <div class="text-center">
//                         <h2 class="section-heading text-uppercase">The Most Powerful Unicorn</h2>
//                         {/* <!-- <h3 class="section-subheading text-muted">최강 유니콘</h3> --> */}
//                     </div>
//                     <div class="row">
//                         <div class="col-lg-4 col-sm-6 mb-4">
//                             {/* <!-- Portfolio item 1--> */}
//                             <div class="portfolio-item">
//                                 <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
//                                 <div class="portfolio-caption">
//                                     <div class="portfolio-caption-heading">C/I</div>
//                                     <div class="portfolio-caption-subheading text-muted">회사 로고</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-lg-4 col-sm-6 mb-4">
//                             {/* <!-- Portfolio item 2--> */}
//                             <div class="portfolio-item">
//                                 <img class="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
//                                 <div class="portfolio-caption">
//                                     <div class="portfolio-caption-heading">Vision</div>
//                                     <div class="portfolio-caption-subheading text-muted">회사 비전</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-lg-4 col-sm-6 mb-4">
//                             {/* <!-- Portfolio item 3--> */}
//                             <div class="portfolio-item">
//                                 <img class="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
//                                 <div class="portfolio-caption">
//                                     <div class="portfolio-caption-heading">Core Value</div>
//                                     <div class="portfolio-caption-subheading text-muted">핵심가치</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* <!-- Team--> */}
//             <section class="page-section bg-light" id="team">
//                 <div class="container">
//                     <div class="text-center">
//                         <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
//                         <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
//                     </div>
//                     <div class="row">
//                         <div class="col-lg-4">
//                             <div class="team-member">
//                                 <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
//                                 <h4>강상경</h4>
//                                 <p class="text-muted">CEO</p>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
//                             </div>
//                         </div>
//                         <div class="col-lg-4">
//                             <div class="team-member">
//                                 <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
//                                 <h4>장다혜</h4>
//                                 <p class="text-muted">FrontEnd Developer</p>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
//                             </div>
//                         </div>
//                         <div class="col-lg-4">
//                             <div class="team-member">
//                                 <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
//                                 <h4>김정훈</h4>
//                                 <p class="text-muted">데지타루 후린스</p>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
//                             </div>
//                         </div>
//                         <div class="col-lg-4">
//                             <div class="team-member">
//                                 <img class="mx-auto rounded-circle" src="assets/img/team/4.jpg" alt="..." />
//                                 <h4>김재현</h4>
//                                 <p class="text-muted">BackEnd Developer</p>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
//                             </div>
//                         </div>
//                         <div class="col-lg-4">
//                             <div class="team-member">
//                                 <img class="mx-auto rounded-circle" src="assets/img/team/5.jpg" alt="..." />
//                                 <h4>강주나</h4>
//                                 <p class="text-muted">BackEnd Developer</p>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
//                                 <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }


// export default About;