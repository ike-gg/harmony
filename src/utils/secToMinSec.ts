const secToMinSec = (time?: number) => {
  if (!time) return;
  const minutes = Math.floor(time / 60);
  const seconds = Number((time % 60).toFixed(0));
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default secToMinSec;
