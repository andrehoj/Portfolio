import ParticleImage, { Vector, forces } from "react-particle-image";
import codeImage from "./codeicon.png";
import { useMediaPredicate } from "react-media-hook";

function motionForce(x, y) {
  return forces.disturbance(x, y, 5);
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

  const width = biggerThan450 ? 400 : 200;
  const height = biggerThan450 ? 300 : 175;

  return (
    <ParticleImage
      className="block"
      creationDuration={2000}
      backgroundColor={bgColor}
      src={codeImage}
      width={width}
      height={height}
      scale={biggerThan450 ? 0.5 : 0.3}
      entropy={20}
      maxParticles={3000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
    />
  );
}
