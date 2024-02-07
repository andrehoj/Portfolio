"use client";

import { useEffect, useRef } from "react";
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const markerSvg = `<svg viewBox="-4 0 36 36">
<path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
<circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

export default function GlobeComponent() {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 45.424721, lng: -75.695 });
    }
  }, []);

  const gData = { lat: 45.424721, lng: -75.695, size: 30, color: ["#56D82D"] };
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  return (
    <Globe
      ref={globeEl}
      globeImageUrl={`${
        isDayTime
          ? "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          : "//unpkg.com/three-globe/example/img/earth-night.jpg"
      }`}
      enablePointerInteraction={false}
      pointOfView={() => {
        return { lat: 45, lng: -75, altitude: 2.5 };
      }}
      width={750}
      backgroundColor={"rgba(0,0,0,0)"}
      animateIn={true}
      waitForGlobeReady={true}
      htmlElementsData={[gData]}
      htmlElement={(d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style.cursor = "pointer";
        return el;
      }}
    />
  );
}
