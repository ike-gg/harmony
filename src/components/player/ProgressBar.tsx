import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";
import { FC, useEffect, useState } from "react";
import secondsToMinutesAndSeconds from "../../utils/secToMinSec";

interface Props {
  currentTime?: number;
  duration?: number;
  track?: string;
  range?: string;
}

const Timestamp: FC<{ children?: string }> = ({ children }) => {
  if (!children) return null;
  return <p className="text-sm opacity-70">{children}</p>;
};

const ProgressBar: FC<Props> = ({ currentTime, duration, track, range }) => {
  const currentTimestamp = secondsToMinutesAndSeconds(currentTime);
  const endTimestamp = secondsToMinutesAndSeconds(duration);

  let percentage = 0;
  if (currentTime && duration) {
    percentage = currentTime / duration;
  }

  return (
    <div className="flex grow gap-2 items-center">
      <Timestamp>{currentTimestamp}</Timestamp>
      <Root
        defaultValue={[0]}
        max={1}
        min={0}
        step={0.01}
        value={[percentage]}
        className="relative flex h-5 w-full touch-none items-center"
      >
        <Track
          style={{ backgroundColor: track }}
          className="relative h-1.5 w-full grow rounded-full"
        >
          <Range
            style={{ backgroundColor: range }}
            className="absolute h-full rounded-full duration-250 ease-linear"
          />
        </Track>
        {/* <Thumb className="block bg-transparent hover:bg-black h-4 w-4 rounded-full  cursor-grab active:cursor-grabbing" /> */}
      </Root>
      <Timestamp>{endTimestamp}</Timestamp>
    </div>
  );
};

export default ProgressBar;
