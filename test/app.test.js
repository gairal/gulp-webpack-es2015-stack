import mockConsole from 'jest-mock-console';
import 'Mocks/doc';
import init from '@/app';

describe('App', () => {
  mockConsole();

  it('Has init method', () => {
    init();
  });
});
