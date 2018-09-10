import 'es6-promise/auto';
import 'whatwg-fetch';
// import Loggout from 'loggout';

// import GLOBALS from './core/GLOBALS';
import Calculator from './components/Calculator';

import '../scss/app.scss';

const init = () => {
  const GLOBALS = {};
  // COMPONENT CREATION
  [
    // {
    //   name: 'logger',
    //   class: Loggout,
    // },
    {
      name: 'calculator',
      class: Calculator,
    },
  ].forEach(e => {
    GLOBALS[e.name] = e.class.factory(GLOBALS);
  });
};

export default init;
