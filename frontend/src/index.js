import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './redux/store/store';

store.subscribe(() => {
  const state = store.getState()
  window.localStorage.setItem('state', JSON.stringify(state))
})

ReactDOM.render (
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
      document.getElementById('root')
);

