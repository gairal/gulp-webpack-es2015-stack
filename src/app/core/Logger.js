export default class Logger {
  constructor(globals) {
    this.level = globals ? globals.logLevel : Logger.LEVELS.error;
  }

  static get LEVELS() {
    return {
      debug: 10,
      info: 20,
      warn: 30,
      error: 40,
    };
  }

  isLoggable(level) {
    return this.level <= level;
  }

  /* eslint-disable no-console */
  debug(...args) {
    if (this.isLoggable(Logger.LEVELS.debug)) {
      console.trace('DEBUG:', ...args);
      return true;
    }
    return false;
  }

  info(...args) {
    if (this.isLoggable(Logger.LEVELS.info)) {
      if (console.info) console.info('INFO:', ...args);
      else console.log('INFO:', ...args);
      return true;
    }
    return false;
  }

  warn(...args) {
    if (this.isLoggable(Logger.LEVELS.warn)) {
      if (console.warn) console.warn('WARN:', ...args);
      else console.log('WARN:', ...args);
      return true;
    }
    return false;
  }

  error(...args) {
    if (this.isLoggable(Logger.LEVELS.error)) {
      if (console.error) console.error('ERROR:', ...args);
      else console.log('ERROR:', ...args);
      return true;
    }
    return false;
  }

  /* eslint-enable no-console */

  static factory(globals) {
    return new Logger(globals);
  }
}
