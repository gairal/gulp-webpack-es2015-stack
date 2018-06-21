import mockConsole from 'jest-mock-console';
import Logger from '@/core/Logger';
import 'Mocks/doc';
import Calculator from '@/components/Calculator';

describe('Calculator', () => {
  mockConsole();
  const logger = new Logger({ logLevel: 20 });
  const component = new Calculator({ logger });

  it('Has default props', () => {
    expect(component).toBeInstanceOf(Calculator);
    expect(component.input).toBeDefined();
    expect(component.calculatorHelper).toBeDefined();
  });

  it('Can render calculator values', () => {
    component.calculatorHelper.stack(2);
    component.calculatorHelper.stack(3);

    component.render();
    expect(component.input.value).toEqual('23');
  });
});
