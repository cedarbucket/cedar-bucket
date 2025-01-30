document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  
  const galleryImages = document.querySelectorAll(".section-parallax-gallery-viewport .gallery-item img");
  if (galleryImages.length > 0) {
    gsap.utils.toArray(galleryImages).forEach((img) => {
      gsap.to(img, {
        opacity: 0.3,
        scale: 1.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 3,
        }
      });
    });
  }

  
  const leftGallery = document.querySelector(".section-parallax-gallery-viewport .left-gallery");
  if (leftGallery) {
    gsap.from(leftGallery, {
      opacity: 0,
      x: -150,
      scale: 0.95,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-parallax-gallery-viewport",
        start: "top 90%",
        end: "top 30%",
        scrub: 3,
        toggleActions: "play none none reverse"
      }
    });
  }

  
  const rightGallery = document.querySelector(".section-parallax-gallery-viewport .right-gallery");
  if (rightGallery) {
    gsap.from(rightGallery, {
      opacity: 0,
      x: 150,
      scale: 0.95,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-parallax-gallery-viewport",
        start: "top 90%",
        end: "top 30%",
        scrub: 3,
        toggleActions: "play none none reverse"
      }
    });
  }

  
  const richText = document.querySelector(".section-parallax-gallery-viewport .rich-text__blocks");
  if (richText) {
    gsap.from(richText, {
      scale: 0.8,
      opacity: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-parallax-gallery-viewport",
        start: "top 90%",
        end: "top 10%",
        scrub: 2,
        toggleActions: "play none none reverse"
      }
    });
  }

  
  const banner = document.querySelector(".banner");
  if (banner) {
    gsap.set(banner, { filter: "brightness(1)", "-webkit-filter": "brightness(1)" });

    gsap.to(banner, {
      filter: "brightness(0.1)",
      "-webkit-filter": "brightness(0.1)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".banner",
        start: "bottom 90%",
        end: "bottom 10%",
        scrub: 3,
      }
    });
  }

});
