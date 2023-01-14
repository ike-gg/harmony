import { useEffect, useState } from "react";
import { AlbumAttributes } from "../App";
import MainHeading from "../components/UI/Headings/MainHeading";
import SubHeading from "../components/UI/Headings/SubHeading";
import Paragraph from "../components/UI/Paragraph";

interface Test {
  attributes: AlbumAttributes;
}

const Home = () => {
  const [albums, setAlbums] = useState<Test[]>([]);

  useEffect(() => {
    fetch("https://harmony-backend.vercel.app/api/popularAlbums")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.results.albums[0].data);
      });
  });

  return (
    <>
      <section className="flex flex-col gap-2">
        <MainHeading>Home</MainHeading>
        <Paragraph>
          Discover today's top hits and find something just for you! Don't miss
          out on the hottest tracks of the moment, check out our Discover
          section now and upgrade your playlist today.
        </Paragraph>
      </section>
      <section>
        <SubHeading>Popular Albums</SubHeading>
        {albums.map((album) => {
          const url = album.attributes.artwork.url
            .replace("{w}", "400")
            .replace("{h}", "500");
          return (
            <div>
              <img src={url} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
