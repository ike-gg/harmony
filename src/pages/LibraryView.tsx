import Library from "../components/library/Library";
import { motion } from "framer-motion";
import { animationProps } from "./RootLayout";

const LibraryView = () => {
  return (
    <motion.div {...animationProps}>
      <Library />
    </motion.div>
  );
};

export default LibraryView;
