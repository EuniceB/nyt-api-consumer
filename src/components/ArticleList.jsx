import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentArticleAction } from '../actions/articles';
import styles from '../assets/styles/ArticleList.module.css';
import useActions from '../hooks/useActions';

/**
 * ArticleList component
 * Renders the list of articles/results
 */
const ArticleList = () => {
  const articles = useSelector((state) => state.articles.items);
  const setArticle = useActions(setCurrentArticleAction);

  useEffect(() => {
    setArticle(null);
  }, [setArticle]);

  return (
    <div>
      <h3>Results:</h3>
      <ul className={styles.articles}>
        {articles && articles.length > 0 ? articles.map((article) => {
          const { _id: id, headline } = article;
          const hash = id.substring(id.lastIndexOf('/') + 1);
          return (
            <li className={styles.article} key={hash}>
              <Link to={`articles/${hash}`}>{headline.main}</Link>
            </li>
          );
        }) : <p>No results found</p>}
      </ul>
    </div>
  );
};

export default ArticleList;
