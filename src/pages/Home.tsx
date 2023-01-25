import { useEffect, useState } from "react";
import HorizontalWrapper from "../components/UI/Wrappers/HorizontalWrapper";
import MainHeading from "../components/UI/Headings/MainHeading";
import SubHeading from "../components/UI/Headings/SubHeading";
import MusicCardItem from "../components/music/albums/AlbumItem";
import Paragraph from "../components/UI/Paragraph";
import PopularAlbums from "../components/music/albums/PopularAlbums";
import PopularSongs from "../components/music/songs/PopularSongs";
import PopularPlaylists from "../components/music/playlists/PopularPlaylists";
import PopularMusicVideos from "../components/music/musicvideo/PopularMusicVideos";

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-2">
        <MainHeading>Home</MainHeading>
        <Paragraph>
          Discover today's top hits and find something just for you! Don't miss
          out on the hottest tracks of the moment, check out content below now
          and upgrade your playlist today.
        </Paragraph>
      </section>
      <PopularAlbums />
      <PopularSongs />
      <PopularMusicVideos />
      <PopularPlaylists />
    </>
  );
};

export default Home;
