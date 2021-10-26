import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger);

const tlHero = gsap.timeline();
    tlHero.fromTo("#title", {
      x: 100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1, 
      ease: "back"
    });
    tlHero.fromTo("#subtitle", {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "back"
    }, "-=.5");
    tlHero.fromTo("#hero-btn", {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "back"
    }, "-=.5");
    tlHero.fromTo(".contato-btn", {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: .8,
      ease: "back"
    }, "-=.5");