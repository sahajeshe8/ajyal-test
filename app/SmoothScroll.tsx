"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      gsap.set("[data-mask]", { opacity: 1, y: 0 });
      return;
    }

    const masks = gsap.utils.toArray<HTMLElement>("[data-mask]");
    const revealImages = gsap.utils.toArray<HTMLElement>("[data-image-reveal]");
    const collageFrames = gsap.utils.toArray<HTMLElement>(".campus-collage [data-parallax-frame]");
    const parallaxFrames = gsap.utils.toArray<HTMLElement>(".instagram-feed [data-parallax-frame]");
    const progressBar = document.querySelector<HTMLElement>(".scroll-progress span");

    gsap.set(masks, {
      opacity: 0,
      y: 28
    });

    gsap.set(revealImages, {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)"
    });

    revealImages.forEach((frame) => {
      const images = frame.querySelectorAll("img");
      gsap.set(images, { scale: 1.04 });
    });

    const lenis = new Lenis({
      duration: 1.05,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 0.9
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    if (progressBar) {
      gsap.set(progressBar, { scaleY: 0, transformOrigin: "top" });
      gsap.to(progressBar, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    }

    ScrollTrigger.batch(masks, {
      start: "top 88%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: "power2.out",
          stagger: 0.035,
          overwrite: "auto"
        });
      }
    });

    ScrollTrigger.batch(revealImages, {
      start: "top 84%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.75,
          ease: "power2.out",
          stagger: 0.05,
          overwrite: "auto"
        });

        batch.forEach((frame) => {
          const images = frame.querySelectorAll("img");
          gsap.to(images, {
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            overwrite: "auto"
          });
        });
      }
    });

    [...collageFrames, ...parallaxFrames].forEach((frame, index) => {
      const image = frame.querySelector("img");

      if (!image) {
        return;
      }

      const direction = index % 2 === 0 ? 1 : -1;

      gsap.fromTo(
        image,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );

      gsap.fromTo(
        frame,
        { xPercent: direction * -3 },
        {
          xPercent: direction * 3,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );
    });

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );

      if (!link) {
        return;
      }

      const hash = link.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      const target = document.querySelector<HTMLElement>(hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -88,
        duration: 1.2,
        onComplete: () => history.pushState(null, "", hash)
      });
    };

    document.documentElement.classList.add("lenis-enabled");
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      document.documentElement.classList.remove("lenis-enabled");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
