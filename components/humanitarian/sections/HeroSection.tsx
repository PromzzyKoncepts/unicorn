"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import "./hero-carousel.css";

const slides = [
  { image: "education", label: "Education and opportunity", alt: "Young students in a classroom" },
  { image: "relief", label: "Food and essential supplies", alt: "Volunteers preparing donated supplies" },
  { image: "healthcare", label: "Access to healthcare", alt: "A doctor speaking with a patient during a check-up" },
  { image: "community", label: "Stronger communities", alt: "People working together to plant a seedling" },
  { image: "first-aid", label: "Emergency preparedness", alt: "Participants attending an outdoor first-aid demonstration" },
];

const motionQuery = "(prefers-reduced-motion: reduce)";
const rotationInterval = 6500;

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(motionQuery).matches;
}

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [controlsFocused, setControlsFocused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, () => true);
  const playing = !reducedMotion && !controlsFocused;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % slides.length);
    }, rotationInterval);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  return (
    <section className="framer-17bdsq4 ministry-hero" aria-label="Humanitarian work photo carousel">
      {slides.map((slide, index) => (
        <div
          className="ministry-hero-slide"
          data-active={index === active}
          aria-hidden={index !== active}
          key={slide.image}
        >
          <Image
            src={`/hero/${slide.image}.jpg`}
            alt={slide.alt}
            fill
            sizes="100vw"
            preload={index === 0}
            fetchPriority={index === 0 ? undefined : "low"}
          />
        </div>
      ))}
      <div className="ministry-hero-shade" aria-hidden="true" />
      <div
        className="ministry-hero-controls"
        role="group"
        aria-label="Choose a carousel photo"
        onFocus={() => setControlsFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setControlsFocused(false);
        }}
      >
        {slides.map((slide, index) => (
          <button
            aria-label={`Show photo ${index + 1}: ${slide.label}`}
            aria-current={index === active ? "true" : undefined}
            key={slide.image}
            onClick={() => setActive(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
