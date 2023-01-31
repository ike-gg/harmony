import { FC } from "react";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import RelatedArtists from "../artists/RelatedArtists";
import { SongType } from "../../../types/api/Song";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedMusicVideos from "../musicvideo/RelatedMusicVideo";
import ItemDesc from "../common/desc/ItemDesc";
import SharedPlayButton from "../../player/SharedPlayButton";
import LibraryButton from "../../library/LibraryButton";

interface Props {
  songData: SongType;
}

const Song: FC<Props> = ({ songData }) => {
  const { id, attributes: song } = songData.data[0];
  const { name, artistName, albumName, artwork, url } = song;
  const text = `from ${albumName}, by ${artistName}`;

  const {
    "music-videos": musicVideos,
    albums,
    artists,
  } = songData.data[0].relationships;

  return (
    <article className="flex flex-col gap-8">
      <ItemDesc
        artwork={artwork}
        subtitle="SONG"
        title={name}
        text={text}
        urlItem={url}
      >
        <SharedPlayButton id={id} />
        <LibraryButton item={{ attributes: song, id, type: "songs" }} />
      </ItemDesc>
      <FooterWrapper>
        <RelatedAlbums albums={albums} />
        <RelatedArtists artists={artists} />
        <RelatedMusicVideos musicVideos={musicVideos} />
      </FooterWrapper>
    </article>
  );
};

export default Song;
