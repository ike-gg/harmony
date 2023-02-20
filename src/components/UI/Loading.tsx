import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-96 flex flex-col items-center justify-center gap-2"
    >
      <RotatingLines strokeColor="#a9a9a9" strokeWidth="3" width="35" />
      <p className="uppercase text-neutral-400/90 font-normal tracking-wide text-xs">
        Loading
      </p>
    </motion.div>
  );
};

export default Loading;
