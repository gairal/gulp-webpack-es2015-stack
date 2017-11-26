/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaijQuery from 'chai-jquery';

const should = chai.should();

describe('App.init', () => {
  it('toBeDefined', () => {
    should(App.init).be.defined();
  });
});
/* eslint-enable no-unused-vars */
