import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Portfolio } from './Portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
