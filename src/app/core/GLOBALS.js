import Loggout from 'loggout';

export default {
  level: typeof LOG_LEVEL !== 'undefined' ? LOG_LEVEL : Loggout.LEVELS.info,
};
