import {
  Artwork,
  EditorialNotes,
  RelationshipTracksMusicVideo,
  RelationshipTracksSong,
} from "./Common";

export interface AlbumType {
  data: {
    id: string;
    type: "albums";
    attributes: AlbumAttributes;
    relationships: AlbumRelationships;
  }[];
}

export interface AlbumAttributes {
  artistName: string;
  artwork: Artwork;
  copyright?: string;
  editorialNotes?: EditorialNotes;
  genreNames: string[];
  isCompilation: boolean;
  isComplete: boolean;
  isSingle: boolean;
  name: string;
  recordLabel?: string;
  releaseDate?: string;
  trackCount: number;
  url: string;
}

interface AlbumRelationships {
  tracks?: AlbumRelationshipTracks;
  artists?: AlbumRelationshipArtists;
}

interface AlbumRelationshipArtists {
  data: {
    id: string;
    type: "artists";
  }[];
}

export interface AlbumRelationshipTracks {
  data: (RelationshipTracksSong | RelationshipTracksMusicVideo)[];
}
