import React, { useLayoutEffect, useRef } from 'react';
import useWindowStore from '../store/Window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const windowState = windows[windowKey];

    const ref = useRef(null);

    if (!windowState) return null;

    const { isOpen, zIndex } = windowState;

    // 🎬 Animation
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(el, {
          scale: 0.8,
          opacity: 0,
          y: 40,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    }, [isOpen]);

    useGSAP(()=>{
        const el = ref.current;
        if(!el) return;

        const [instance] = Draggable.create(el,{
            onPress: ()=> focusWindow(windowKey),
        });
        return ()=> instance.kill()
    },[])

    // 🧠 Control visibility AFTER animation
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        el.style.display = "block";
      } else {
        // delay hiding until animation ends
        setTimeout(() => {
          el.style.display = "none";
        }, 300);
      }
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        onMouseDown={() => focusWindow(windowKey)}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;