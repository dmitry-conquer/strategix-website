import "../styles/main.scss";
import Scroll from "./services/scroll";
import { BaseSlider, GradientSlider, TestimonialsSlider, BackTopButton, Header } from "./components";
// @ts-ignore
import homeIcon from '../../public/images/icons/home.svg';

const scroll = new Scroll();

const initScrollServices = (): void => {
  scroll.initSmoothScroll();
  scroll.initAOS();
};

const initUIComponents = (): void => {
  new Header(scroll);
  new BaseSlider();
  new GradientSlider();
  new TestimonialsSlider();
  new BackTopButton();
};

document.addEventListener("DOMContentLoaded", (): void => {
  initScrollServices();
  initUIComponents();
});
