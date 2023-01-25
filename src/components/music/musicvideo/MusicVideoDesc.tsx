import { FC } from "react";
import { MusicVideoAttributes } from "../../../types/api/MusicVideo";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: MusicVideoAttributes;
}

const MusicVideoDesc: FC<Props> = ({ attributes }) => {
  const { artistName, name, genreNames, url } = attributes;

  const genre = genreNames.join(", ");
  return (
    <div className="flex flex-col-reverse gap-2 md:flex-row md:justify-between">
      <div className="grow">
        <h2 className="text-base font-semibold opacity-80 line-clamp-1">
          {artistName}
        </h2>
        <h1 className="text-lg md:text-2xl font-semibold line-clamp-1">
          {name}
        </h1>
        <h3 className="font-normal pb-1 opacity-50 line-clamp-1">{genre}</h3>
      </div>
      <div>
        <Hyperlink href={url} icon="external-link-alt">
          Apple Music
        </Hyperlink>
      </div>
    </div>
  );
};

export default MusicVideoDesc;
