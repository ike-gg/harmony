import { FC } from "react";
import removeParentheses from "../../utils/removeParentheses";
import { motion } from "framer-motion";

interface Props {
  children: string;
  delay?: number;
  duration?: number;
}

const SlidingText: FC<Props> = ({ children, delay = 0, duration = 1 }) => {
  let delayBetweenCharacters = delay;
  const characters = children.split("").map((char, index) => {
    if (char === " ") delayBetweenCharacters += 0.08 * duration;
    else delayBetweenCharacters += 0.015 * duration;

    return (
      <motion.span
        key={char + index}
        className="overflow-hidden inline-block align-middle pb-1"
      >
        <motion.span
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          transition={{ delay: delayBetweenCharacters, ease: "circOut" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </motion.span>
    );
  });
  return <>{characters}</>;
};

export default SlidingText;
