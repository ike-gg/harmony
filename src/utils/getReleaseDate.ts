const getReleaseDate = (date?: string) => {
  if (!date) return;
  const [year, month, day] = date.split("-").map(Number);
  return {
    year,
    month,
    day,
  };
};

export default getReleaseDate;
