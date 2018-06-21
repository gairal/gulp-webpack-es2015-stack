import mockConsole from 'jest-mock-console';
import 'Mocks/doc';
import init from '@/gairal';

describe('App', () => {
  mockConsole();

  it('Has init method', () => {
    init();
  });
});
