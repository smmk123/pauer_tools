import { motion } from "framer-motion";

const SlideLeftDiv = ({children}) => {
    return (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };
  
  export default SlideLeftDiv;