import AbstractComponent from '../AbstractComponent';
import CalculatorHelper from './CalculatorHelper';


export default class Calculator extends AbstractComponent {
  constructor() {
    super({ className: 'js-calculator' });

    this.input = document.getElementById('res');
    this.calculatorHelper = new CalculatorHelper();
  }

  render() {
    this.input.value = this.calculatorHelper.currNumber;
  }

  addEvents() {
    const buttons = document.getElementsByTagName('button');

    for (let i = 0, l = buttons.length; i < l; i += 1) {
      const elt = buttons[i];
      const val = elt.getAttribute('data-calculator');
      let method;
      if (val) {
        switch (val) {
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            method = () => { this.calculatorHelper.stack(+val); };
            break;
          case '+':
            method = () => { this.calculatorHelper.add(); };
            break;
          case '-':
            method = () => { this.calculatorHelper.remove(); };
            break;
          case '/':
            method = () => { this.calculatorHelper.divide(); };
            break;
          case 'x':
            method = () => { this.calculatorHelper.multiply(); };
            break;
          case 'AC':
            method = () => { this.calculatorHelper.reset(); };
            break;
          case '=':
            method = () => { this.calculatorHelper.total(); };
            break;
          default:
          // console.log('no actions');
        }

        if (method) {
          elt.addEventListener('click', () => {
            method();
            this.render();
          });
        }
      }
    }
  }
}
