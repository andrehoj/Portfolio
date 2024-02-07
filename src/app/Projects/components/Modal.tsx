import { motion } from "framer-motion";
import { ReactNode } from "react";
import Backdrop from "./BackDrop";

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
        className="absolute top-0 left-0 h-full w-full"
        variants={{ ...dropIn }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="top-5 absolute right-5 close-modal-btn"
          onClick={handleClose}
        >
          Close
        </button>
        <div className="flex h-full justify-center align-middle items-center mt-8">
          {children}
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
