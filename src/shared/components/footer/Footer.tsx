import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Subcribe from "./Subcribe";
import Contact from "./Contact";
import Shop from "./Shop";
import AboutUs from "./AboutUs";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-col", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="grid md:grid-cols-4 mx-auto">
      <div className="footer-col">
        <Subcribe />
      </div>
      <div className="footer-col">
        <Contact />
      </div>
      <div className="footer-col">
        <Shop />
      </div>
      <div className="footer-col">
        <AboutUs />
      </div>
    </div>
  );
};

export default Footer;