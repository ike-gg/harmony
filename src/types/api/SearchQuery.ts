import { AlbumAttributes } from "./Album";
import { ArtistsRelationship } from "./Common";
import { MusicVideoAttributes } from "./MusicVideo";
import { SongAttributes } from "./Song";

interface SearchQueryAlbums {
  data: {
    id: string;
    type: "albums";
    attributes: AlbumAttributes;
  }[];
}

interface SearchQuerySongs {
  data: {
    id: string;
    type: "songs";
    attributes: SongAttributes;
  }[];
}

interface SearchQueryArtists {
  data: {
    id: string;
    type: "artists";
    attributes: ArtistsRelationship;
  }[];
}

interface SearchQueryMusicVideos {
  data: {
    id: string;
    type: "music-videos";
    attributes: MusicVideoAttributes;
  }[];
}
export interface SearchQuery {
  results: {
    artists?: SearchQueryArtists;
    albums?: SearchQueryAlbums;
    songs?: SearchQuerySongs;
    ["music-videos"]: SearchQueryMusicVideos;
  };
}
