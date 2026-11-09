"use client";

import { useEffect, useRef, type ReactNode } from "react";
import "./updates-scroll.css";

export function UpdatesScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinned = container?.querySelector<HTMLElement>("[data-updates-pinned]");
    const track = container?.querySelector<HTMLElement>("[data-updates-track]");
    if (!container || !pinned || !track) return;

    const desktopMotion = window.matchMedia("(min-width: 810px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let travel = 0;
    let scrollRange = 0;

    function measure() {
      if (!container || !pinned || !track) return;
      container.style.setProperty("--updates-pinned-height", `${pinned.offsetHeight}px`);
      const lastCard = track.lastElementChild;
      travel = lastCard
        ? Math.max(0, lastCard.getBoundingClientRect().right - track.getBoundingClientRect().left - track.clientWidth)
        : 0;
      scrollRange = Math.max(1, container.clientHeight - pinned.offsetHeight);
      schedule();
    }

    function render() {
      frame = 0;
      if (!container || !pinned || !track) return;
      if (!desktopMotion.matches) {
        track.style.removeProperty("--updates-offset");
        return;
      }
      const top = Number.parseFloat(getComputedStyle(pinned).top);
      const progress = Math.min(1, Math.max(0, (top - container.getBoundingClientRect().top) / scrollRange));
      track.style.setProperty("--updates-offset", `${-travel * progress}px`);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(render);
    }

    function revealFocusedCard(event: FocusEvent) {
      if (!desktopMotion.matches || !container || !pinned || !track || !travel) return;
      const target = event.target;
      const card = target instanceof Element ? target.closest("a") : null;
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      if (bounds.left >= 0 && bounds.right <= document.documentElement.clientWidth) return;
      const offset = Math.max(0, Math.min(travel, bounds.left - track.getBoundingClientRect().left));
      const top = Number.parseFloat(getComputedStyle(pinned).top);
      window.scrollTo({ top: window.scrollY + container.getBoundingClientRect().top - top + offset / travel * scrollRange, behavior: "instant" });
    }

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(pinned);
    observer.observe(track);
    window.addEventListener("scroll", schedule, { passive: true });
    desktopMotion.addEventListener("change", measure);
    track.addEventListener("focusin", revealFocusedCard);
    measure();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      desktopMotion.removeEventListener("change", measure);
      track.removeEventListener("focusin", revealFocusedCard);
    };
  }, []);

  return <div className="framer-gyj5gl updates-scroll" ref={containerRef}>{children}</div>;
}
