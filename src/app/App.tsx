import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
declare let module: any

ReactDOM.render(<Hello compiler="Typescript...1" framework="React" bundler="Webpack" />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}