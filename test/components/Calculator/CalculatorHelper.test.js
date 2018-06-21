import 'Mocks/doc';
import CalculatorHelper from '@/components/Calculator/CalculatorHelper';

describe('Calculator => CalculatorHelper', () => {
  const component = new CalculatorHelper();

  it('Has default props', () => {
    expect(component).toBeInstanceOf(CalculatorHelper);
    expect(component.operations).toBeDefined();
    expect(component.reset).toBeInstanceOf(Object);

    expect(component.result).toBeDefined();
    expect(component.currNum).toBeDefined();
    expect(component.currOpe).toBeDefined();
    expect(component.isEq).toBeFalsy();
  });

  it('Can stack nums', () => {
    component.reset();
    component.stack(3);
    component.stack(4);
    expect(component.currNum).toEqual(34);
    expect(component.currNumber).toEqual(34);
  });

  it('Can add', () => {
    component.reset();
    component.stack(2);
    component.add();
    component.stack(2);
    component.total();
    expect(component.currNum).toEqual(4);
    expect(component.result).toEqual(4);
  });

  it('Can remove', () => {
    component.reset();
    component.stack(2);
    component.remove();
    component.stack(2);
    component.total();
    expect(component.currNum).toEqual(0);
    expect(component.result).toEqual(0);
  });

  it('Can multiply', () => {
    component.reset();
    component.stack(2);
    component.multiply();
    component.stack(3);
    component.total();
    expect(component.currNum).toEqual(6);
    expect(component.result).toEqual(6);
  });

  it('Can divide', () => {
    component.reset();
    component.stack(4);
    component.divide();
    component.stack(2);
    component.total();
    expect(component.currNum).toEqual(2);
    expect(component.result).toEqual(2);
  });
});
