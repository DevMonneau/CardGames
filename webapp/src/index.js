import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/Root/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
