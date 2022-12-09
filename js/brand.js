{
  // var swiper = new Swiper(".brand-cate", {
  //   slidesPerView: 6,
  //   spaceBetween: 14,
  //   slidesPerGroup: 1,
  //   navigation: {
  //     nextEl: ".brand-slide-next",
  //     prevEl: ".brand-slide-prev",
  //   },
  // });

  // const swiper = new Swiper(".brand-cate", {
  //   slidesPerView: 3,
  //   spaceBetween: 14,
  //   grid: {
  //     rows: 2,
  //   },
  // });

  // window.onresize = function(event){
  //   var innerWidth = window.innerWidth;
  //   innerWidth <= "1280" ? body.style.borderColor = "blue" : body.style.borderColor = "black";
  // }

  // window.onresize = function (event) {
  var innerWidth = window.innerWidth;
  // console.log(innerWidth);
  if (innerWidth <= "768") {
    var swiper = new Swiper(".brand-cate", {
      slidesPerView: 3,
      spaceBetween: 14,
      grid: {
        rows: 2,
      },
    });
  } else {
    var swiper = new Swiper(".brand-cate", {
      slidesPerView: 6,
      spaceBetween: 14,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".brand-slide-next",
        prevEl: ".brand-slide-prev",
      },
    });
  }
  // };

  // var mql = window.matchMedia("screen and (max-width: 768px)");

  // if (mql.matches) {
  //   var swiper = new Swiper(".brand-cate", {
  //     slidesPerView: 3,
  //     spaceBetween: 14,
  //     grid: {
  //       rows: 2,
  //     },
  //   });
  // } else {
  //   var swiper = new Swiper(".brand-cate", {
  //     slidesPerView: 6,
  //     spaceBetween: 14,
  //     slidesPerGroup: 1,
  //     navigation: {
  //       nextEl: ".brand-slide-next",
  //       prevEl: ".brand-slide-prev",
  //     },
  //   });
  // }

  // mql.addListener(function (e) {
  //   if (e.matches) {
  //     var swiper = new Swiper(".brand-cate", {
  //       slidesPerView: 3,
  //       spaceBetween: 14,
  //       grid: {
  //         rows: 2,
  //       },
  //     });
  //   } else {
  //     var swiper = new Swiper(".brand-cate", {
  //       slidesPerView: 6,
  //       spaceBetween: 14,
  //       slidesPerGroup: 1,
  //       navigation: {
  //         nextEl: ".brand-slide-next",
  //         prevEl: ".brand-slide-prev",
  //       },
  //     });
  //   }
  // });

  // const body = document.querySelector("body");

  // function handleWindowSize() {
  //   const windowWidth = window.innerWidth;
  //   if (windowWidth <= 768) {
  //     const swiper = new Swiper(".brand-cate", {
  //       slidesPerView: 3,
  //       spaceBetween: 14,
  //       grid: {
  //         rows: 2,
  //       },
  //     });
  //   } else {
  //     const swiper = new Swiper(".brand-cate", {
  //       slidesPerView: 6,
  //       spaceBetween: 14,
  //       slidesPerGroup: 1,
  //       navigation: {
  //         nextEl: ".brand-slide-next",
  //         prevEl: ".brand-slide-prev",
  //       },
  //     });
  //   }
  // }

  // window.addEventListener("resize", handleWindowSize);
}
