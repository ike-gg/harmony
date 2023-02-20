import Hyperlink from "./Hyperlink";

import { motion } from "framer-motion";

const Error = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-96 flex flex-col items-center justify-center gap-2"
    >
      <p className="uppercase text-neutral-400/90 font-normal tracking-wide text-xs">
        Something went wrong... 🥲
      </p>
      <Hyperlink href={"/"} icon="estate">
        Shall we try once again?
      </Hyperlink>
    </motion.div>
  );
};

export default Error;
