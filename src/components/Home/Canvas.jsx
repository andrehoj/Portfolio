import ParticleImage, { Vector, forces } from "react-particle-image";
import useWindowSize from "../../hooks/useWindowSize";
import codeImage from "./codeicon.png";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#30d5c8",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

function motionForce(x, y, ParticleForce) {
  return forces.disturbance(x, y, 5);
}

export default function Canvas({ bgColor, iconColor }) {
  const { width, height } = useWindowSize();
 
  return (
    <ParticleImage
      creationDuration={2000}
      backgroundColor={bgColor}
      src={codeImage}
      width={width / 1.8}
      height={height / 2.5}
      scale={1}
      entropy={30}
      maxParticles={5000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
    />
  );
}
