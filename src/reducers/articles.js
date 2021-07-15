import {
  SET_ARTICLES,
  SET_CURRENT_ARTICLE,
  SET_QUERY,
  SET_PAGE,
  ARTICLES_ERROR,
  ARTICLE_ERROR,
  SET_STATUS,
} from '../constants/ActionTypes';

const initialState = {
  items: [],
  current: null,
  page: 0,
  query: '',
  status: 'loading',
  error: null,
};

/**
 * Articles reducer
 * Reacts to actions and changes the articles' state accordingly
 * @param {object} state
 * @param {object} action
 * @returns new state
 */
const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, items: action.payload };
    case SET_CURRENT_ARTICLE:
      return { ...state, current: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case ARTICLES_ERROR:
      return { ...state, items: [], error: action.payload };
    case ARTICLE_ERROR:
      return { ...state, current: null, error: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default articlesReducer;
