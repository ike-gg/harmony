import Library from "../components/library/Library";
import { motion } from "framer-motion";

const LibraryView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Library />
    </motion.div>
  );
};

export default LibraryView;
