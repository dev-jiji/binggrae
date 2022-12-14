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

  
      // Scroll Animation (sa, 스크롤 애니메이션)
      const saDefaultMargin = 300;
      let saTriggerMargin = 0;
      let saTriggerHeight = 0;
      const saElementList = document.querySelectorAll('.swiper-slide');

      const saFunc = function() {
        for (const element of saElementList) {
          if (!element.classList.contains('show')) {
            if (element.dataset.saMargin) {
              saTriggerMargin = parseInt(element.dataset.saMargin);
            } else {
              saTriggerMargin = saDefaultMargin;
            }
      
            if (element.dataset.saTrigger) {
              saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
            } else {
              saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
            }
      
            if (window.innerHeight > saTriggerHeight) {
              let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
              setTimeout(function() {
                element.classList.add('show');
              }, delay);
            }
          }
        }
      }

      window.addEventListener('load', saFunc);
      window.addEventListener('scroll', saFunc);
}
