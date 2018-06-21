import 'es6-promise/auto';

import Calculator from './components/Calculator';

const init = () => {
  // COMPONENT CREATION
  [
    Calculator,
  ].forEach(e => e.factory());
};

/* eslint-disable-next-line no-confusing-arrow */
((g, a) => g.readyState === 'loading' ? g.addEventListener('DOMContentLoaded', a) : a())(document, init);
