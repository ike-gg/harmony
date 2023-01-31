import { FC } from "react";
import { AlbumType } from "../../../types/api/Album";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import AlbumFooter from "./AlbumFooter";
import AlbumTracks from "./AlbumTracks";
import RelatedArtists from "../artists/RelatedArtists";
import SharedPlayButton from "../../player/SharedPlayButton";
import ItemDesc from "../common/desc/ItemDesc";
import LibraryButton from "../../library/LibraryButton";

interface Props {
  albumData: AlbumType;
}

const Album: FC<Props> = ({ albumData }) => {
  const { attributes: album, id } = albumData.data[0];
  const { tracks, artists } = albumData.data[0].relationships;

  const { artwork, artistName, name, url } = album;

  const tracksId = tracks?.data.map((item) => item.id);

  return (
    <article className="flex flex-col gap-8">
      <ItemDesc
        artwork={artwork}
        subtitle="ALBUM"
        title={name}
        text={artistName}
        urlItem={url}
      >
        <SharedPlayButton id={tracksId} />
        <LibraryButton item={{ attributes: album, id, type: "albums" }} />
      </ItemDesc>
      <AlbumTracks tracks={tracks} />
      <AlbumFooter attributes={album} />
      <FooterWrapper>
        <RelatedArtists artists={artists} />
      </FooterWrapper>
    </article>
  );
};

export default Album;
