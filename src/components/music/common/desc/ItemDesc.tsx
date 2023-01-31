import { CSSProperties, FC } from "react";
import { Artwork as ArtworkType } from "../../../../types/api/Common";
import parseArtwork from "../../../../utils/parseArtwork";
import Hyperlink from "../../../UI/Hyperlink";
import Artwork from "../../Artwork";
import DescSubtitle from "./DescSubtitle";
import DescText from "./DescText";
import DescTitle from "./DescTitle";

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
      <figure className="w-3/5 md:max-w-[16rem] h-full">
        <Artwork artworkUrl={url} size="large" className="h-full w-full" />
      </figure>
      <div className="flex flex-col gap-4 text-center md:text-left md:pt-6">
        <div style={styles}>
          <DescSubtitle>{subtitle}</DescSubtitle>
          <DescTitle>{title}</DescTitle>
          <DescText>{text}</DescText>
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
