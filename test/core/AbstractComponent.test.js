import mockConsole from 'jest-mock-console';
import Loggout from 'loggout';
import 'Mocks/doc';
import AbstractComponent from '@/core/AbstractComponent';

describe('AbstractComponent', () => {
  mockConsole();
  const logger = Loggout.factory({ level: Loggout.LEVELS.info });

  it('Has default props when no options', () => {
    const component = AbstractComponent.factory({ logger });
    expect(component).toBeInstanceOf(AbstractComponent);
    expect(component.opts).toBeUndefined();
  });

  it('Has default props', () => {
    const component = AbstractComponent.factory({ logger }, { className: '' });
    expect(component).toBeInstanceOf(AbstractComponent);
    expect(component.opts).toBeDefined();
    expect(component.opts.className).toBeDefined();
  });

  it('Can be absent of the page', () => {
    const component = AbstractComponent.factory({ logger }, { className: 'doesNotExists' });
    expect(component.exists).toBeFalsy();
  });

  it('Can be on the page', () => {
    const component = AbstractComponent.factory({ logger }, { className: 'p-4' });
    expect(component.exists).toBeTruthy();
  });

  it('Inits w/o onInit', () => {
    const component = AbstractComponent.factory({ logger }, { className: 'p-4' });
    expect.assertions(1);

    component.init().then((c) => {
      expect(c).toBeInstanceOf(AbstractComponent);
    });
  });

  it('Inits with onInit', () => {
    const component = AbstractComponent.factory({ logger }, { className: 'p-4' });
    expect.assertions(2);

    const onInit = jest.fn();
    component.onInit = onInit;

    expect.assertions(2);
    component.init().then((c) => {
      expect(onInit).toHaveBeenCalled();
      expect(c).toBeInstanceOf(AbstractComponent);
    });
  });
});
