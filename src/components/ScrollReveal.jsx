import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  className = ''
}) {
  const elRef = useRef(null);

  // split teks jadi span.word
  const splitText = useMemo(() => {
    const txt = typeof children === 'string' ? children : '';
    return txt.split(/(\s+)/).map((word, i) =>
      /^\s+$/.test(word)
        ? word
        : <span className="word" key={i}>{word}</span>
    );
  }, [children]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;

    // rotasi container
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        rotate: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: 1
        }
      }
    );

    const words = el.querySelectorAll('.word');

    // fade in + blur
    gsap.fromTo(
      words,
      { opacity: baseOpacity, filter: `blur(${enableBlur ? blurStrength : 0}px)` },
      {
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: 1
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd
  ]);

  return (
    <span ref={elRef} className={`scroll-reveal ${className}`}>
      {splitText}
    </span>
  );
}
