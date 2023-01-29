import classNames from "classnames";
import { FC } from "react";
import Hyperlink from "./Hyperlink";

interface Props {
  className: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={classNames(
        "py-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg opacity-75 hover:opacity-100",
        className
      )}
    >
      <h3 className="text-3xl font-semibold">Harmony</h3>
      <div className="grid grid-cols-2 md:flex text-center md:flex-row gap-2">
        <Hyperlink
          href="https://github.com/ike-gg/harmony"
          icon="github"
          target="_blank"
        >
          Github
        </Hyperlink>
        <Hyperlink
          href="https://github.com/ike-gg"
          icon="github"
          target="_blank"
        >
          Author
        </Hyperlink>
        <Hyperlink
          href="https://www.google.com/search?q=tani+mefedron+z+dostawa+do+domu"
          icon="external-link-alt"
          target="_blank"
        >
          Landing page
        </Hyperlink>
        <Hyperlink
          href="https://developer.apple.com/documentation/applemusicapi/"
          icon="apple"
          target="_blank"
        >
          Music API
        </Hyperlink>
      </div>
    </footer>
  );
};

export default Footer;
