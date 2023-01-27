const getURL = (url: string, params?: Record<string, string>) => {
  const resourceURL = new URL(url);
  if (params) {
    resourceURL.search = new URLSearchParams(params)
      .toString()
      .replaceAll("%2C", ",");
  }
  return resourceURL.href;
};

export default getURL;
