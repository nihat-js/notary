import React from 'react';
import ReactDOM from 'react-dom/client';

import IndexRoute from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexRoute/>
  </React.StrictMode>
);
