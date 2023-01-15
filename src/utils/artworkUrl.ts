type Size = "small" | "medium" | "large";

const getArtworkUrl = (artworkUrl: string, size: Size) => {
  let pxSize;
  switch (size) {
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
