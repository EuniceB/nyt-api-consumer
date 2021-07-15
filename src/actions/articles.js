import { getArticle, getArticles } from '../api';
import * as types from '../constants/ActionTypes';
import { getErrorMessage } from '../helpers';

/**
 * Creates a SET_PAGE action
 * @param {number} page
 * @returns an action
 */
export const setPageAction = (page = 0) => ({ type: types.SET_PAGE, payload: page });

/**
 * Creates a SET_QUERY action
 * @param {string} query
 * @returns an action
 */
export const setQueryAction = (query = '') => ({ type: types.SET_QUERY, payload: query });

/**
 * Creates a SET_CURRENT_ARTICLE action
 * @param {object} article
 * @returns an action
 */
export const setCurrentArticleAction = (article) => ({
  type: types.SET_CURRENT_ARTICLE, payload: article,
});

/**
 * Fetches the specified page from the NYT API, using the query provided
 * @param {string} query
 * @param {number} page
 */
export const fetchArticlesAction = (query = '', page = 0) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_STATUS, payload: 'loading' });
    const articles = await getArticles(page, query);
    dispatch({ type: types.SET_STATUS, payload: 'idle' });
    dispatch({ type: types.SET_ARTICLES, payload: Object.values(articles) });
  } catch (error) {
    dispatch({ type: types.SET_STATUS, payload: 'errored' });
    dispatch({ type: types.ARTICLES_ERROR, payload: getErrorMessage(error) });
  }
};

/**
 * Fetches the specified article from the NYT API, by id
 * @param {string} id
 */
export const fetchArticleAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_STATUS, payload: 'loading' });
    const article = await getArticle(id);
    dispatch({ type: types.SET_STATUS, payload: 'idle' });
    dispatch(setCurrentArticleAction(article));
  } catch (error) {
    dispatch({ type: types.SET_STATUS, payload: 'errored' });
    dispatch({ type: types.ARTICLE_ERROR, payload: getErrorMessage(error) });
  }
};
