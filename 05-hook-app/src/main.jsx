import React from 'react';
import ReactDOM from 'react-dom/client';

// import { FocusScreen } from './05-useRef/FocusScreen';
// import { Layout } from './05-useRef/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallBackHook';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CallbackHook />,
  // </React.StrictMode>,
);
