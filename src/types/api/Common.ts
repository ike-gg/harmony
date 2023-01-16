export interface Artwork {
  bgcolor?: string;
  height: number;
  width: number;
  textColor1?: string;
  textColor2?: string;
  textColor3?: string;
  textColor4?: string;
  url: string;
}

export interface EditorialNotes {
  short?: string;
  standard?: string;
  name?: string;
  tagline?: string;
}

export interface RelationshipTracksSong {
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

export interface RelationshipTracksMusicVideo {
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
