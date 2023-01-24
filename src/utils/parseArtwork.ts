import { Artwork } from "../types/api/Common";

const parseArtwork = (artwork: Artwork) => {
  const addAlpha = (color: string, opacity: number) => {
    const opacityHex = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + opacityHex.toString(16).toUpperCase();
  };
  const {
    bgColor: bgColorString,
    textColor1: primaryColorString,
    textColor4: secondayColorString,
  } = artwork;

  const bgColor = `#${bgColorString}`;
  const primaryColor = `#${primaryColorString}`;
  const secondaryColor = `#${secondayColorString}`;

  return {
    bgColor,
    primaryColor,
    secondaryColor,
    addAlpha,
  };
};

export default parseArtwork;
