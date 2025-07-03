export default class BaseSlider {
  private swiper: any;
  private readonly selector = "#base-slider";
  private _resizeTimer?: number;

  private readonly options = {
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".base-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".base-swiper-next",
      prevEl: ".base-swiper-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  };

  constructor() {
    this.initSwiper();
    window.addEventListener("resize", this.onResize);
  }

  private initSwiper() {
    const el = document.querySelector(this.selector);
    if (!el) return;

    if (window.innerWidth < 768) {
      if (this.swiper) {
        this.swiper.destroy(true, true);
        this.swiper = null;
      }
      return;
    }

    if (typeof Swiper !== "undefined") {
      if (this.swiper) this.swiper.destroy(true, true);
      this.swiper = new Swiper(el, this.options);
    }
  }
  private onResize = () => {
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer);
    }
    this._resizeTimer = window.setTimeout(() => {
      this.initSwiper();
    }, 100);
  };
}
