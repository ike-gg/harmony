import { FC } from "react";

import type { AlbumAttributes } from "../App";

const Album: FC<AlbumAttributes> = (albumAttributes) => {
  const artworkUrl = albumAttributes.artwork.url
    .replace("{w}", "400")
    .replace("{h}", "500");
  return (
    <div className="flex gap-3 p-5 bg-white rounded-md border-2 shadow-solid shadow-neutral-200 border-neutral-200 hover:translate-y-1 hover:shadow-none transition">
      <div className="flex-none w-24">
        {/* <img src={artworkUrl} className="rounded-sm" /> */}
        <div className="h-full max-w-full aspect-square bg-black"></div>
      </div>
      <div className="flex flex-col justify-center pt-1">
        <h2 className="text-lg font-semibold text-neutral-800 pr-4 leading-5">
          {albumAttributes.name}
        </h2>
        <h3 className="text-sm font-light grow text-neutral-600">
          {albumAttributes.artistName}
        </h3>
        <h4 className="text-xxs uppercase font-bold text-neutral-400">
          {albumAttributes.genreNames[0]}
        </h4>
      </div>
    </div>
  );
};

export default Album;
