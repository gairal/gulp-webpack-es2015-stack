import 'es6-promise/auto';

import Calculator from './components/Calculator';

const init = () => {
  // COMPONENT CREATION
  [
    Calculator,
  ].forEach(e => e.factory());
};


((callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
})(init);
