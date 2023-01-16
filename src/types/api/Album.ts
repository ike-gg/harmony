import {
  Artwork,
  EditorialNotes,
  RelationshipTracksMusicVideo,
  RelationshipTracksSong,
} from "./Common";

export interface Album {
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

interface AlbumRelationshipTracks {
  data: (RelationshipTracksSong | RelationshipTracksMusicVideo)[];
}
