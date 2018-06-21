import Logger from './Logger';

export default {
  logLevel: typeof LOG_LEVEL !== 'undefined' ? LOG_LEVEL : Logger.LEVELS.info,
};
