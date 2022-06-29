const menuSlider = document.querySelector(".swiper-block");
const breakpointMob = window.matchMedia("(max-width:767px)");
let swiperMenu;

const initMenuSwiper = (slider) => {
  swiperMenu = new Swiper(slider, {
    slidesPerView: "auto",
    loop: false,
    mousewheel: true,
  });
};

const initMenuSlider = () => {
  if (menuSlider) {
    const breakpointChecker = () => {
      if (breakpointMob.matches) {
        if (swiperMenu) {
          swiperMenu.destroy();
        }
      } else {
        if (swiperMenu) {
          swiperMenu.destroy();
          initMenuSwiper(menuSlider, false);
        } else {
          initMenuSwiper(menuSlider, false);
        }
      }
    };

    breakpointMob.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export { initMenuSlider };
