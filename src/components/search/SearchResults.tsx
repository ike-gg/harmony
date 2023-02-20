import classNames from "classnames";
import { useEffect, useLayoutEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import parseResults from "../../utils/parseResults";
import Artwork from "../music/Artwork";
import ItemName from "../music/common/ItemName";
import ItemSubtitle from "../music/common/ItemSubtitle";
import ItemTitle from "../music/common/ItemTitle";
import Empty from "../UI/Empty";
import Icon from "../UI/Icon";
import { motion } from "framer-motion";

const SearchResults = () => {
  const resultsData = useSelector((state: RootState) => state.search.results);

  if (!resultsData) return null;

  const results = useMemo(() => parseResults(resultsData), [resultsData]);

  if (results.length === 0) return <Empty />;

  const content = results.map((result) => {
    const { attributes, type, id } = result;
    const { artwork, name } = attributes;

    if (!artwork) {
      return null;
    }

    const { url } = artwork;

    let detailsPage: string = "";
    let resultType: string = "";
    let footerText: string = "";

    if (type === "albums") {
      detailsPage = `/album/${id}`;
      resultType = "album";
      footerText = attributes.artistName;
    }
    if (type === "artists") {
      detailsPage = `/artist/${id}`;
      resultType = "artist";
      footerText = attributes.genreNames.join(", ");
    }
    if (type === "music-videos") {
      detailsPage = `/musicVideo/${id}`;
      resultType = "music video";
      footerText = attributes.artistName;
    }
    if (type === "songs") {
      detailsPage = `/song/${id}`;
      resultType = "song";
      footerText = attributes.artistName;
    }

    return (
      <motion.li
        key={id}
        initial={{ y: 100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          to={detailsPage}
          className="flex gap-3 bg-white border border-neutral-100 rounded-md p-4 hover:bg-neutral-100"
        >
          <Artwork
            size="extrasmall"
            artworkUrl={url}
            className={classNames("h-12 md:h-20 aspect-auto", {
              "rounded-full": type === "artists",
            })}
          />
          <div className="flex flex-col justify-evenly text-ellipsis overflow-hidden whitespace-nowrap">
            <ItemSubtitle>{resultType}</ItemSubtitle>
            <ItemTitle spaced={false}>{name}</ItemTitle>
            <ItemName spaced={false}>{footerText}</ItemName>
          </div>
          <Icon
            className="ml-auto text-2xl text-neutral-500 h-full flex my-auto line-clamp-1 "
            iconName="angle-right"
          />
        </Link>
      </motion.li>
    );
  });

  return <ul className="flex flex-col gap-2">{content}</ul>;
};

export default SearchResults;
