import { Artwork, EditorialNotes } from "./Common";

export interface ArtistType {
  data: {
    id: string;
    type: "artists";
    attributes: ArtistAttributes;
    relationships: ArtistRelationships;
  }[];
}

export interface ArtistAttributes {
  artwork: Artwork;
  editorialNotes?: EditorialNotes;
  genreNames: string[];
  name: string;
  url: string;
}

interface ArtistRelationships {
  albums?: ArtistAlbumRelationship;
  "music-videos"?: ArtistMusicVideosRelationship;
  playlists?: ArtistPlaylistsRelationship;
}

export interface ArtistAlbumRelationship {
  data: {
    id: string;
  }[];
}

export interface ArtistMusicVideosRelationship {
  data: {
    id: string;
  }[];
}

export interface ArtistPlaylistsRelationship {
  data: {
    id: string;
  }[];
}
