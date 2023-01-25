import { FC } from "react";
import { AlbumType } from "../../../types/api/Album";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import Artwork from "../Artwork";
import AlbumDesc from "./AlbumDesc";
import AlbumFooter from "./AlbumFooter";
import AlbumTracks from "./AlbumTracks";
import RelatedArtists from "../artists/RelatedArtists";

interface Props {
  albumData: AlbumType;
}

const Album: FC<Props> = ({ albumData }) => {
  const album = albumData.data[0].attributes;
  const { tracks, artists } = albumData.data[0].relationships;

  const { url } = album.artwork;

  return (
    <article className="flex flex-col gap-8">
      <main className="flex flex-col gap-3 items-center md:items-stretch md:flex-row md:gap-6">
        <div className="w-3/5 md:w-3/12">
          <Artwork artworkUrl={url} size="large" blurredShadow />
        </div>
        <AlbumDesc attributes={album} />
      </main>
      <AlbumTracks tracks={tracks} />
      <AlbumFooter attributes={album} />
      <FooterWrapper>
        <RelatedArtists artists={artists} />
      </FooterWrapper>
    </article>
  );
};

export default Album;
