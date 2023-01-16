import { Artwork, EditorialNotes } from "./Common";

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
  data: (AlbumRelationshipTracksSong | AlbumRelationshipTracksMusicVideo)[];
}

interface AlbumRelationshipTracksSong {
  id: string;
  type: "songs";
  attributes: {
    albumName: string;
    genreNames: string[];
    trackNumber: number;
    releaseDate: string;
    durationInMillis: number;
    artwork: Artwork;
    composerName: string;
    url: string;
    discNumber: number;
    name: string;
    previews: {
      url: string;
    }[];
    artistName: string;
  };
}

interface AlbumRelationshipTracksMusicVideo {
  id: string;
  type: "music-videos";
  attributes: {
    albumName: string;
    genreNames: string[];
    trackNumber: number;
    releaseDate: string;
    durationInMillis: number;
    artwork: Artwork;
    url: string;
    name: string;
    previews: {
      url: string;
      hlsUrl?: string;
      artwork: Artwork;
    };
    artistName: string;
  };
}
