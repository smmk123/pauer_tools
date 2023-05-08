import { motion } from "framer-motion";

const SlideInDiv = ({ direction, children }) => {
  const variants = {
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInDiv;