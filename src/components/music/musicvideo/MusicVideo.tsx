import { CSSProperties, FC, useRef } from "react";
import { MusicVideoType } from "../../../types/api/MusicVideo";
import MusicVideoDesc from "./MusicVideoDesc";
import getArtworkUrl from "../../../utils/getArtworkUrl";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedArtists from "../artists/RelatedArtists";
import RelatedSongs from "../songs/RelatedSongs";
import parseArtwork from "../../../utils/parseArtwork";
import { isMobile } from "react-device-detect";

interface Props {
  musicVideoData: MusicVideoType;
}

const MusicVideo: FC<Props> = ({ musicVideoData }) => {
  const musicVideo = musicVideoData.data[0];

  const musicref = useRef<HTMLVideoElement>(null);

  const { attributes } = musicVideo;
  const { artwork, url: videoUrl } = attributes.previews[0];
  const { url: artworkUrl } = artwork;

  const { albums, artists, songs } = musicVideo.relationships;

  const thumbnail = getArtworkUrl(artworkUrl, "large");

  return (
    <article className="flex flex-col gap-8">
      <main className="flex flex-col gap-3 relative">
        {!isMobile && (
          <video
            className="rounded-lg blur-3xl scale-95 absolute w-full"
            src={videoUrl}
            ref={musicref}
            muted
          />
        )}
        <video
          className="rounded-lg z-20"
          style={{ filter: "blur(50)", border: "50px" }}
          src={videoUrl}
          onPaste={() => musicref.current!.pause()}
          onPlay={() => musicref.current!.play()}
          onTimeUpdate={(e) =>
            (musicref.current!.currentTime = e.currentTarget.currentTime)
          }
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
