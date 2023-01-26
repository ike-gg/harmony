const removeParentheses = (text: string) => {
  return text.replace(/ *\([^)]*\) */g, "");
};

export default removeParentheses;
