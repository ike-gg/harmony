import { Artwork, EditorialNotes } from "./Common";

export interface Song {
  data: {
    id: string;
    type: "songs";
    attributes: SongAttributes;
    relationships: SongRelationships;
  }[];
}

export interface SongAttributes {
  albumName: string;
  artistName: string;
  artwork: Artwork;
  composerName?: string;
  discNumber: number;
  durationInMillis: number;
  editorialNotes?: EditorialNotes;
  genreNames: string[];
  name: string;
  previews: {
    url: string;
  }[];
  releaseDate?: string;
  trackNumber?: number;
  url: string;
}

interface SongRelationships {
  albums?: SongRelationshipsAlbums;
  artists?: SongRelationshipsArtists;
}

interface SongRelationshipsArtists {
  data: {
    id: string;
    type: "artists";
  }[];
}

interface SongRelationshipsAlbums {
  data: {
    id: string;
    type: "albums";
  }[];
}
