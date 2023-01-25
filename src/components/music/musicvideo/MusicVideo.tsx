import { FC } from "react";
import { MusicVideoType } from "../../../types/api/MusicVideo";
import MusicVideoDesc from "./MusicVideoDesc";
import getArtworkUrl from "../../../utils/getArtworkUrl";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedArtists from "../artists/RelatedArtists";
import RelatedSongs from "../songs/RelatedSongs";

interface Props {
  musicVideoData: MusicVideoType;
}

const MusicVideo: FC<Props> = ({ musicVideoData }) => {
  console.log(musicVideoData);
  const musicVideo = musicVideoData.data[0];

  const { attributes } = musicVideo;
  const { artwork, url: videoUrl } = attributes.previews[0];
  const { url: artworkUrl } = artwork;

  const { albums, artists, songs } = musicVideo.relationships;

  const thumbnail = getArtworkUrl(artworkUrl, "large");

  return (
    <article className="flex flex-col gap-8">
      <main className="flex flex-col gap-3">
        <video
          className="rounded-lg"
          src={videoUrl}
          controls
          poster={thumbnail}
        />
        <MusicVideoDesc attributes={attributes} />
      </main>
      <p>{musicVideo.attributes.editorialNotes?.standard}</p>
      <FooterWrapper>
        <RelatedArtists artists={artists} />
        <RelatedAlbums albums={albums} />
        <RelatedSongs songs={songs} />
      </FooterWrapper>
    </article>
  );
};

export default MusicVideo;
