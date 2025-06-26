import "../styles/main.scss";
import Scroll from "./services/scroll";
import { BaseSlider, GradientSlider, TestimonialsSlider, BackTopButton } from "./components";

const scroll = new Scroll();

const initScrollServices = (): void => {
  scroll.initSmoothScroll();
  scroll.initAOS();
};

const initUIComponents = (): void => {
  new BaseSlider();
  new GradientSlider();
  new TestimonialsSlider();
  new BackTopButton();
};

document.addEventListener("DOMContentLoaded", (): void => {
  initScrollServices();
  initUIComponents();
});
