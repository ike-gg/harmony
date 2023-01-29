import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import parseResults from "../../utils/parseResults";
import Artwork from "../music/Artwork";
import Empty from "../UI/Empty";
import Icon from "../UI/Icon";

const SearchResults = () => {
  const resultsData = useSelector((state: RootState) => state.search.results);

  if (!resultsData) return null;

  const results = parseResults(resultsData);

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
      <Link
        to={detailsPage}
        className="flex gap-3 bg-white border border-neutral-100 rounded-md p-4 hover:bg-neutral-100"
        key={id}
      >
        <Artwork
          size="extrasmall"
          artworkUrl={url}
          isTrack
          className={classNames("h-12 md:h-20 aspect-auto", {
            "rounded-full": type === "artists",
          })}
        />
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
          <p className="md:mt-1 text-xxs md:text-xs uppercase text-neutral-400 font-medium tracking-wide">
            {resultType}
          </p>
          <h2
            className={classNames(
              "md:mt-1 text-xs md:text-base font-medium text-neutral-600 line-clamp-1 "
            )}
          >
            {name}
          </h2>
          <p className="text-xxs md:text-xs text-neutral-500">{footerText}</p>
        </div>
        <Icon
          className="ml-auto text-2xl text-neutral-500 h-full flex my-auto line-clamp-1 "
          iconName="angle-right"
        />
      </Link>
    );
  });

  return <div className="flex flex-col gap-2">{content}</div>;
};

export default SearchResults;
