import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import App from './components/App';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, composedEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
