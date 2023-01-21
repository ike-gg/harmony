import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center gap-2">
      <RotatingLines strokeColor="#a9a9a9" strokeWidth="3" width="35" />
      <p className="uppercase text-neutral-400/90 font-normal tracking-wide text-xs">
        Loading
      </p>
    </div>
  );
};

export default Loading;
