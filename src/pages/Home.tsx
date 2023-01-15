import { useEffect, useState } from "react";
import { AlbumAttributes } from "../App";
import HorizontalWrapper from "../components/music/HorizontalWrapper";
import MainHeading from "../components/UI/Headings/MainHeading";
import SubHeading from "../components/UI/Headings/SubHeading";
import MusicCardItem from "../components/music/MusicCardItem";
import Paragraph from "../components/UI/Paragraph";
import { PopularAlbums } from "../types/api/PopularAlbums";

interface Test {
  attributes: AlbumAttributes;
}

const Home = () => {
  const [albums, setAlbums] = useState<PopularAlbums | null>(null);

  useEffect(() => {
    fetch("https://harmony-backend.vercel.app/api/popularAlbums")
      .then((data) => data.json())
      .then((data: PopularAlbums) => {
        setAlbums(data);
      });
  }, []);

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
      <section className="flex flex-col gap-4">
        <SubHeading>Popular Albums</SubHeading>
        <HorizontalWrapper>
          {albums?.results.albums[0].data.map((album) => {
            const { artwork, name, artistName } = album.attributes;
            const { url } = artwork;
            const redirectTo = `${album.type}/${album.id}`;
            return (
              <MusicCardItem
                to={redirectTo}
                key={album.id}
                artwork={url}
                author={artistName}
                name={name}
              />
            );
          })}
        </HorizontalWrapper>
      </section>
      <section className="flex flex-col gap-4">
        <SubHeading>Popular Albums</SubHeading>
        <HorizontalWrapper>
          {albums?.results.albums[0].data.map((album) => {
            const { artwork, name, artistName } = album.attributes;
            const { url } = artwork;
            const redirectTo = `${album.type}/${album.id}`;
            return (
              <MusicCardItem
                to={redirectTo}
                key={album.id}
                artwork={url}
                author={artistName}
                name={name}
              />
            );
          })}
        </HorizontalWrapper>
      </section>
      <section className="flex flex-col gap-4">
        <SubHeading>Popular Albums</SubHeading>
        <HorizontalWrapper>
          {albums?.results.albums[0].data.map((album) => {
            const { artwork, name, artistName } = album.attributes;
            const { url } = artwork;
            const redirectTo = `${album.type}/${album.id}`;
            return (
              <MusicCardItem
                to={redirectTo}
                key={album.id}
                artwork={url}
                author={artistName}
                name={name}
              />
            );
          })}
        </HorizontalWrapper>
      </section>
    </>
  );
};

export default Home;
