export default class BaseSlider {
  private readonly selector = "#testimonials-slider";
  private readonly options = {
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-swiper-next",
      prevEl: ".testimonials-swiper-prev",
    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1.3,
    //     spaceBetween: 20,
    //   },
    //   480: {
    //     slidesPerView: 1.8,
    //     spaceBetween: 20,
    //   },
    //   640: {
    //     slidesPerView: 2.2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 40,
    //   },
    //   1280: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    // },
  };

  constructor() {
    this.initSwiper();
  }

  private initSwiper() {
    const el = document.querySelector(this.selector);
    if (!el) return;

    if (typeof Swiper !== "undefined") {
      new Swiper(el, this.options);
    }
  }
}
