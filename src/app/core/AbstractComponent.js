export default class AbstractComponent {
  constructor(globals, opts) {
    this.opts = opts;
    this.logger = globals.logger;
  }

  get exists() {
    if (!this.opts) return false;

    const { className } = this.opts;
    if (!className) return false;

    // We always use class, not ID
    this.elts = [].slice.call(
      document.getElementsByClassName(this.opts.className),
    );
    if (!this.elts.length) return false;

    return true;
  }

  /**
   * Init a component asynchrounousely
   *
   * @returns This
   * @memberof AbstractComponent
   */
  init() {
    return new Promise((resolve, reject) => {
      if (!this.exists) reject(new Error('Component doesn’t exist'));

      if (this.onInit) this.onInit();
      resolve(this);
    });
  }

  static factory(globals, opts) {
    const component = new this(globals, opts);
    component.init().catch(err => component.logger.error(err));
    return component;
  }
}
