import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppWrapper } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
