document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth opacity & slight zoom effect for gallery images
  gsap.utils.toArray(".section-parallax-gallery-viewport .gallery-item img").forEach((img) => {
    gsap.to(img, {
      opacity: 0.3, // Reduce opacity to 30%
      scale: 1.05, // Slight zoom effect
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%", // Trigger earlier for a smoother effect
        end: "bottom 10%", // Keep the transition longer
        scrub: 3, // Increases smoothness
      }
    });
  });

  // Left gallery smooth slide-in effect with scaling
  gsap.from(".section-parallax-gallery-viewport .left-gallery", {
    opacity: 0,
    x: -150, // Start further left
    scale: 0.95, // Slightly smaller initially
    duration: 2.5, // Longer transition for smoothness
    ease: "power2.out", // Smooth easing
    scrollTrigger: {
      trigger: ".section-parallax-gallery-viewport",
      start: "top 90%",
      end: "top 30%",
      scrub: 3, // Makes movement much smoother
      toggleActions: "play none none reverse"
    }
  });

  // Right gallery smooth slide-in effect with scaling
  gsap.from(".section-parallax-gallery-viewport .right-gallery", {
    opacity: 0,
    x: 150, // Start further right
    scale: 0.95,
    duration: 2.5, // Longer duration
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-parallax-gallery-viewport",
      start: "top 90%",
      end: "top 30%",
      scrub: 3, // Adds smooth motion
      toggleActions: "play none none reverse"
    }
  });

  // 🔥 New Effect: Scale down text to original size
  gsap.from(".section-parallax-gallery-viewport .rich-text__blocks", {
    scale: 0.8,  // Start at 0.9x size
    opacity: 0.2,  // Fade in for better effect
    duration: 1, // Smooth scale-down
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-parallax-gallery-viewport",
      start: "top 90%",
      end: "top 10%",
      scrub: 2,  // Makes the scaling effect smooth
      toggleActions: "play none none reverse"
    }
  });

  
  // Set brightness to 1 initially (ensures GSAP has a starting value)
  gsap.set(".banner", {
    filter: "brightness(1)",
    "-webkit-filter": "brightness(1)" // Safari fix
  });

  // 🔥 Reduce brightness from 1 to 0.3 as the section scrolls OUT (from the bottom)
  gsap.to(".banner", {
    filter: "brightness(0.1)",
    "-webkit-filter": "brightness(0.1)",  // Safari compatibility
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".banner",
      start: "bottom 90%",  // Animation starts when the section's bottom enters viewport
      end: "bottom 10%",    // Fully reduced when the section's bottom is 30% inside the viewport
      scrub: 3,             // Smooth transition effect
      markers: false,        // Debugging markers (REMOVE after testing)
    }
  });

});
