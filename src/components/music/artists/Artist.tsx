import { FC } from "react";
import { ArtistType } from "../../../types/api/Artist";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedPlaylists from "../playlists/RelatedPlaylists";
import RelatedMusicVideos from "../musicvideo/RelatedMusicVideo";
import ItemDesc from "../common/desc/ItemDesc";
import LibraryButton from "../../library/LibraryButton";

interface Props {
  artistData: ArtistType;
}

const Artist: FC<Props> = ({ artistData }) => {
  const { attributes: artist, id } = artistData.data[0];
  const { artwork, name, genreNames, url } = artist;
  const genres = genreNames.join(", ");

  const {
    albums,
    playlists,
    "music-videos": musicVideos,
  } = artistData.data[0].relationships;

  if (!artwork) return null;

  return (
    <article className="flex flex-col gap-8">
      <ItemDesc
        artwork={artwork}
        subtitle="ARTIST"
        title={name}
        text={genres}
        urlItem={url}
      >
        <LibraryButton item={{ attributes: artist, id, type: "artists" }} />
      </ItemDesc>
      <RelatedAlbums rows={2} albums={albums} />
      <RelatedMusicVideos musicVideos={musicVideos} />
      <RelatedPlaylists playlists={playlists} />
    </article>
  );
};

export default Artist;
