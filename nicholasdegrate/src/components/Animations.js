import gsap from "gsap";

export const revealContact = (node1) => {
  gsap.from(node1, {
    duration: 0.8,
    width: 0,
    transformOrigin: "right top",
    // skewX: 3,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const revealCloseContact = (node1) => {
  gsap.to(node1, {
    duration: 0.8,
    width: 0,
    // transformOrigin: "right top",
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};
