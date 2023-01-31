import { CSSProperties, FC } from "react";
import { Artwork as ArtworkType } from "../../../types/api/Common";
import parseArtwork from "../../../utils/parseArtwork";
import Hyperlink from "../../UI/Hyperlink";
import Artwork from "../Artwork";
import ItemSubtitle from "./ItemSubtitle";
import ItemText from "./ItemText";
import ItemTitle from "./ItemTitle";

interface Props {
  artwork: ArtworkType;
  urlItem: string;
  subtitle: string;
  title: string;
  text: string;
  children?: JSX.Element | JSX.Element[];
}

const ItemDesc: FC<Props> = (props) => {
  const { artwork, children, subtitle, text, title, urlItem } = props;
  const { url } = artwork;

  const itemTheme = parseArtwork(artwork);
  const cardStyles: CSSProperties = { background: itemTheme.bgColor };
  const styles: CSSProperties = { color: itemTheme.primaryColor };

  return (
    <main
      style={cardStyles}
      className="flex flex-col gap-3 items-center md:items-stretch md:flex-row md:gap-6 p-8 rounded-lg"
    >
      <figure className="w-3/5 md:w-3/12 h-max">
        <Artwork artworkUrl={url} size="large" className="h-full w-full" />
      </figure>
      <div className="flex flex-col gap-4 text-center md:text-left md:pt-6">
        <div style={styles}>
          <ItemSubtitle>{subtitle}</ItemSubtitle>
          <ItemTitle>{title}</ItemTitle>
          <ItemText>{text}</ItemText>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <div>
            <Hyperlink
              href={urlItem}
              target={"_blank"}
              icon="external-link-alt"
            >
              Check on Apple Music
            </Hyperlink>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDesc;
