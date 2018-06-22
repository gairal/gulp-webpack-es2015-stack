import 'es6-promise/auto';
import 'whatwg-fetch';

import GLOBALS from './core/GLOBALS';
import Logger from './core/Logger';
import Calculator from './components/Calculator';

import '../scss/app.scss';

const init = () => {
  // COMPONENT CREATION
  [
    {
      name: 'logger',
      class: Logger,
    },
    {
      name: 'calculator',
      class: Calculator,
    },
  ].forEach((e) => { GLOBALS[e.name] = e.class.factory(GLOBALS); });
};

export default init;
