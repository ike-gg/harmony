const getURL = (url: string, params?: Record<string, string>) => {
  const resourceURL = new URL(url);
  if (params) {
    resourceURL.search = new URLSearchParams(params).toString();
  }
  return resourceURL.href;
};

export default getURL;
