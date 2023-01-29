export type Size =
  | "icon"
  | "extrasmall"
  | "small"
  | "medium"
  | "large"
  | "xxsmall";

const getArtworkUrl = (artworkUrl: string, size: Size) => {
  let pxSize;
  switch (size) {
    case "icon":
      pxSize = "50";
      break;
    case "xxsmall":
      pxSize = "60";
      break;
    case "extrasmall":
      pxSize = "100";
      break;
    case "small":
      pxSize = "250";
      break;
    case "medium":
      pxSize = "750";
      break;
    case "large":
      pxSize = "1200";
      break;
  }
  const url = artworkUrl.replace("{w}", pxSize).replace("{h}", pxSize);
  return url;
};

export default getArtworkUrl;
