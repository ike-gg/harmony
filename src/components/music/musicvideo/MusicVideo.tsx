import { FC, useRef } from "react";
import { MusicVideoType } from "../../../types/api/MusicVideo";
import MusicVideoDesc from "./MusicVideoDesc";
import getArtworkUrl from "../../../utils/getArtworkUrl";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedArtists from "../artists/RelatedArtists";
import RelatedSongs from "../songs/RelatedSongs";
import { isMobile } from "react-device-detect";
import { useAppDispatch } from "../../../store/store";
import { PlayerActions } from "../../../store/playerSlice";

interface Props {
  musicVideoData: MusicVideoType;
}

const MusicVideo: FC<Props> = ({ musicVideoData }) => {
  const musicref = useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();

  const musicVideo = musicVideoData.data[0];

  const { attributes } = musicVideo;
  const { artwork, url: videoUrl } = attributes.previews[0];
  const { url: artworkUrl } = artwork;

  const { albums, artists, songs } = musicVideo.relationships;

  const thumbnail = getArtworkUrl(artworkUrl, "large");

  return (
    <article className="flex flex-col gap-8">
      <main className="flex flex-col gap-3 relative">
        <video
          className="rounded-lg blur-3xl scale-100 absolute w-full"
          src={videoUrl}
          ref={musicref}
          muted
          playsInline
        />
        <video
          className="rounded-lg z-20"
          src={videoUrl}
          onPause={() => musicref.current!.pause()}
          onPlay={() => {
            musicref.current!.play();
            dispatch(PlayerActions.pause());
          }}
          onTimeUpdate={(e) =>
            (musicref.current!.currentTime = e.currentTarget.currentTime)
          }
          controls
          playsInline
          poster={thumbnail}
        />
        <MusicVideoDesc attributes={attributes} />
      </main>
      <FooterWrapper>
        <RelatedArtists artists={artists} />
        <RelatedAlbums albums={albums} />
        <RelatedSongs songs={songs} />
      </FooterWrapper>
    </article>
  );
};

export default MusicVideo;
