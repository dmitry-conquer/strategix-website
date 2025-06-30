import "../styles/main.scss";
import Scroll from "./services/scroll";
import { BaseSlider, GradientSlider, TestimonialsSlider, BackTopButton, Header, Accordion } from "./components";

const scroll = new Scroll();

const initScrollServices = (): void => {
  scroll.initSmoothScroll();
};

const initUIComponents = (): void => {
  new Header(scroll);
  new BaseSlider();
  new GradientSlider();
  new TestimonialsSlider();
  new BackTopButton();
  new Accordion();
};

document.addEventListener("DOMContentLoaded", (): void => {
  initScrollServices();
  initUIComponents();
});
