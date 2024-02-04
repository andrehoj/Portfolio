import { motion } from "framer-motion";
import EmblaCarousel from "./EmblaCarousel";
import { Carousel } from "@material-tailwind/react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { ImageType } from "@/declaration";
import { ReactNode } from "react";

const dropIn = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="overflow-hidden absolute top-0 left-0 h-screen w-screen"
      style={{
        zIndex: 99,
        background: "rgba( 0, 0, 0, 0.25 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const Modal = ({
  handleClose,
  children,
}: {
  handleClose: () => void;
  children: ReactNode;
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-transparent absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
        variants={{ ...dropIn }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="top-5 absolute right-5 border-y-theme_purple flex items-center rounded-sm border border-theme_purple px-2 py-1 text-lg font-medium text-theme_purple transition-all duration-200 ease-linear hover:bg-theme_purple  hover:text-main_black active:scale-75"
          onClick={handleClose}
        >
          Close
        </button>
        <div className="flex justify-center align-middle items-center">
          {children}
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
