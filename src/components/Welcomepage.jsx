import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];

  // 🔥 GSAP animation function (with killTweens fix)
  const animateLetters = (letter, weight, duration = 0.45) => {
    gsap.killTweensOf(letter);

    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();

      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 200000);

      const weight = min + (max - min) * intensity;

      animateLetters(letter, weight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetters(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // ✅ Proper cleanup
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcomepage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanup && titleCleanup();
      subtitleCleanup && subtitleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          " hii , i'm pritam welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef}>
        {renderText(
          "portfolio",
          "text-9xl font-georama italic",
          400
        )}
      </h1>

      <div className="small-screen">
        <p>This portfolio design is for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcomepage;