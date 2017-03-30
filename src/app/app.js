import $ from 'jquery'
import 'tether'
import 'bootstrap'
import { Calculator } from './calculator/calculator'

class App {
  constructor () {
    this._calculator = new Calculator()
    this._$input = $('#res')
  }

  init () {
    this.addEvent()

    $(() => {
      $('[data-toggle="popover"]').popover()
    })
  }

  static factory () {
    let app = new App()
    app.init()
    return app
  }

  render () {
    this._$input.val(this._calculator.currNum)
  }

  addEvent () {
    let $buttons = $(':button')

    $.each($buttons, (i, v) => {
      let elt = $(v)
      let val = elt.attr('data-calculator')
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
          elt.click(() => {
            method()
            this.render()
          })
        }
      }
    })
  }
}

$(() => {
  App.factory()
})
