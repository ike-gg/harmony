import { Artwork, RelationshipTracksSong } from "./Common";

export interface Playlist {
  data: {
    id: string;
    type: "playlists";
    attributes: PlaylistAttributes;
    relationships: PlaylistRelationships;
  }[];
}

export interface PlaylistAttributes {
  artwork: Artwork;
  curatorName: string;
  description?: {
    short?: string;
    standard: string;
  };
  isChart: boolean;
  lastModifiedDate?: string;
  name: string;
  url: string;
}

interface PlaylistRelationships {
  tracks?: RelationshipTracksSong;
}
