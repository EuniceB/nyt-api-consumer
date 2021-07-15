import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from '../assets/styles/App.module.css';
import Header from './Header';
import HomePage from './HomePage';
import ArticleDetails from './ArticleDetails';

/**
 * App Component
 * It's the root of our component tree.
 * Wraps the content in a container (for styling) and it renders components
 * based on the route the user wants to visit
 */
const App = () => (
  <Router>
    <Header />
    <div className={styles.container}>
      <Switch>
        <Route path="/articles/:id">
          <ArticleDetails />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default App;
