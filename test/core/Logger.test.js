import mockConsole from 'jest-mock-console';
import Logger from '@/core/Logger';

describe('Logger', () => {
  mockConsole();
  const logger = Logger.factory({ logLevel: 20 });

  it('Is instanciated', () => {
    expect(logger).toBeInstanceOf(Logger);
  });

  it('Debugs', () => {
    logger.level = Logger.LEVELS.debug;
    expect(logger.debug('TEST')).toBeTruthy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Infos', () => {
    logger.level = Logger.LEVELS.info;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeTruthy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Warns', () => {
    logger.level = Logger.LEVELS.warn;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeTruthy();
    expect(logger.error('TEST')).toBeTruthy();
  });

  it('Errors', () => {
    logger.level = Logger.LEVELS.error;
    expect(logger.debug('TEST')).toBeFalsy();
    expect(logger.info('TEST')).toBeFalsy();
    expect(logger.warn('TEST')).toBeFalsy();
    expect(logger.error('TEST')).toBeTruthy();
  });
});
