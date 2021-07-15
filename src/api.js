import axios from 'axios';
import {
  cacheArticleResponse, cacheArticlesResponse, getArticlesCachedResponse, getArticleCachedResponse,
} from './helpers';

const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

/**
 * Get articles from the server or from the cache if possible
 * @param {number} page
 * @param {string} query
 * @returns an array of articles
 */
export const getArticles = async (page, query) => {
  const getArticlesFromResponse = (res) => res.data.response.docs;

  const cachedResponse = getArticlesCachedResponse(query, page);
  if (cachedResponse) {
    return getArticlesFromResponse(cachedResponse);
  }
  const queryParam = query ? `&q=${query}` : '';
  const response = await axios.get(`${API_URL}?fq=document_type=article&fl=_id,headline&api-key=${API_KEY}&page=${page}${queryParam}`);
  cacheArticlesResponse(response);
  return getArticlesFromResponse(response);
};

/**
 * Get a specific article by id from the server or from the cache if possible
 * @param {number} page
 * @param {string} query
 * @returns the article or null
 */
export const getArticle = async (id) => {
  const getArticleFromResponse = (res) => (res.data.response.docs.length > 0
    ? res.data.response.docs[0] : null);

  const cachedResponse = getArticleCachedResponse(id);
  if (cachedResponse) {
    return getArticleFromResponse(cachedResponse);
  }
  const response = await axios.get(`${API_URL}?fl=headline,lead_paragraph,web_url,pub_date&fq=_id%3A"nyt%3A%2F%2Farticle%2F${id}"&api-key=${API_KEY}`);
  cacheArticleResponse(response);
  return getArticleFromResponse(response);
};
