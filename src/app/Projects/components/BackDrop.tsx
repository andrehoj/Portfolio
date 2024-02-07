import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-transparent fixed top-0 left-0 h-full w-screen"
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

export default Backdrop;
