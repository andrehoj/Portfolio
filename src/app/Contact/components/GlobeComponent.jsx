"use client";

import { useEffect, useRef } from "react";
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function GlobeComponent() {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 45.424721, lng: -75.695 });
    }
  }, []);

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
    />
  );
}
