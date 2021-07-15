/**
 * Formats the date to DD.MM.YYYY
 * @param {string} dateString
 * @returns the formated date as a string
 */
export const formatDate = (dateString) => {
  const shortDate = dateString.substring(0, 10);
  return shortDate.split('-').reverse().join('.');
};

/**
 * Returns the error message to show based on the error type
 * @param {object} error
 * @returns a string with the error message to show
 */
export const getErrorMessage = (error) => {
  if (!error.response) {
    return 'Connection timed out. The server took too long to respond.';
  }
  if (error.response.status === 429) {
    return 'Whoa there! You are making too many requests.';
  }
  if (error.response.data.fault) {
    return error.response.data.fault.faultstring;
  }
  return error.response.statusText;
};

/**
 * Retrieves the article page cached response from sessionStorage
 * @param {string} query
 * @param {number} page
 * @returns the cached response or undefined
 */
export const getArticlesCachedResponse = (query, page) => {
  const cache = JSON.parse(sessionStorage.getItem('cachedResponses')) || {};
  const key = `page=${page}&q=${query || ''}`;
  return cache[key];
};

/**
 * Retrieves the article details cached response from sessionStorage
 * @param {string} id
 * @returns the cached response or undefined
 */
export const getArticleCachedResponse = (id) => {
  const cache = JSON.parse(sessionStorage.getItem('cachedResponses')) || {};
  return cache[`id=${id}`];
};

/**
 * Saves a article page response from the API in sessionStorage
 * @param {object} response
 */
export const cacheArticlesResponse = (response) => {
  const cache = JSON.parse(sessionStorage.getItem('cachedResponses')) || {};
  const regex = /page=(?<page>\d+)(?<query>&q=(.+))?/;
  const { groups } = response.config.url.match(regex);
  const key = `page=${groups.page}&q=${groups.query || ''}`;
  const newCache = { ...cache, [key]: response };
  sessionStorage.setItem('cachedResponses', JSON.stringify(newCache));
};

/**
 * Saves an article details response from the API in sessionStorage
 * @param {object} response
 */
export const cacheArticleResponse = (response) => {
  const cache = JSON.parse(sessionStorage.getItem('cachedResponses')) || {};
  const regex = /_id%3A"nyt%3A%2F%2Farticle%2F(?<id>.+)"/;
  const { groups } = response.config.url.match(regex);
  const newCache = { ...cache, [`id=${groups.id}`]: response };
  sessionStorage.setItem('cachedResponses', JSON.stringify(newCache));
};
