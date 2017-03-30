import { Calculator } from './calculator/calculator'

class App {
  constructor () {
    this._calculator = new Calculator()
    this._input = document.getElementById('res')
  }

  init () {
    this.addEvent()
  }

  static factory () {
    let app = new App()
    app.init()
    return app
  }

  render () {
    this._input.value = this._calculator.currNum
  }

  addEvent () {
    let buttons = document.getElementsByTagName('button')

    for (let i = 0, l = buttons.length; i < l; i++) {
      let elt = buttons[i]
      let val = elt.getAttribute('data-calculator')
      let method
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
            method = () => { this._calculator.stack(+val) }
            break
          case '+':
            method = () => { this._calculator.add() }
            break
          case '-':
            method = () => { this._calculator.remove() }
            break
          case '/':
            method = () => { this._calculator.divide() }
            break
          case 'x':
            method = () => { this._calculator.multiply() }
            break
          case 'AC':
            method = () => { this._calculator.reset() }
            break
          case '=':
            method = () => { this._calculator.total() }
            break
          default:
          // console.log('no actions');
        }

        if (method) {
          elt.addEventListener('click', e => {
            method()
            this.render()
          })
        }
      }
    }
  }
}

App.factory()
