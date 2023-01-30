import ParticleImage, { Vector, forces } from "react-particle-image";
import codeImage from "./codeicon.png";
import { useMediaPredicate } from "react-media-hook";

function motionForce(x, y) {
  return forces.disturbance(x, y, 25);
}

export default function Canvas({ bgColor }) {
  const biggerThan450 = useMediaPredicate("(min-width: 450px)");

  const particleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#FFFFFF",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  const width = biggerThan450 ? 435 : 270;
  const height = biggerThan450 ? 320 : 265;

  return (
    <ParticleImage
      className="block"
      creationDuration={1000}
      backgroundColor={bgColor}
      src={codeImage}
      width={width}
      height={height}
      scale={biggerThan450 ? 0.50 : 0.27}
      entropy={5}
      maxParticles={1500}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
    />
  );
}
