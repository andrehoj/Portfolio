"use client"

import Globe from "react-globe.gl";
import { useRef, useEffect } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const markerSvg = `<svg viewBox="-4 0 36 36">
<path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
<circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

export default function GlobeComponent() {
  const globeEl = useRef();
  const window = useWindowSize();

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = .5;
    globeEl.current.pointOfView({ lat: 45.424721, lng: -75.695 });
  }, []);

  const N = 1;

  const gData = [...Array(N).keys()].map(() => ({
    lat: 45.424721,
    lng: -75.695,
    size: 30,
    color: ["#56D82D"],
  }));

  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  return (
    <Globe
      waitForGlobeReady={false}
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
      height={window.width * 0.48}
      backgroundColor={"rgba(0,0,0,0)"}
      animateIn={true}
      htmlElementsData={gData}
      htmlElement={(d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style["pointer-events"] = "auto";
        el.style.cursor = "pointer";
        el.onclick = () => console.info(d);
        return el;
      }}
    />
  );
}

// waitForGlobeReady={true}
// showGlobe={true}
// globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// backgroundColor="#121212"

// labelColor={() => "rgb(85, 216, 44)"}
// labelLat={() => 45.424721}
// labelLng={() => -75.695}
// labelLabel={"Ottawa, ON"}
// labelResolution={2}
// labelSize={2}
// labelDotRadius={() => 1}
