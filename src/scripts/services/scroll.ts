import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default class Scroll {
  private lenis: Lenis | null = null;

  public initSmoothScroll() {
    if (document.body.dataset.smoothScroll !== "true") return;
    this.lenis = new Lenis({
      autoRaf: true,
      anchors: true,
    });

    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
    });
  }

  public stop() {
    this.lenis?.stop();
  }

  public start() {
    this.lenis?.start();
  }

  public getLenis(): Lenis | null {
    return this.lenis;
  }
}
