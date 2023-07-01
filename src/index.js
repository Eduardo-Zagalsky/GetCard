import React from 'react';
import ReactDOM from 'react-dom/client';
import CardGame from './card_game';

const App = () => (
  <div>
    <CardGame />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);