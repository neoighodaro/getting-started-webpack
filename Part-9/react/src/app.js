import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

import './styles/app.css';

const App = () => (
  <div className="container">
    <HelloWorld />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
