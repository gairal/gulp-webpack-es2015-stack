import init from './gairal';

/* eslint-disable-next-line no-confusing-arrow */
((g, a) => g.readyState === 'loading' ? g.addEventListener('DOMContentLoaded', a) : a())(document, init);
