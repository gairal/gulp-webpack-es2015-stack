/// <reference path="../../../typings/index.d.ts" />
export class Calculator {
  constructor () {
    this.operations = {
      add: 'add',
      remove: 'remove',
      multiply: 'multiply',
      divide: 'divide',
      total: 'total'
    }
    this.reset()
  }

  // getters / setters
  get currNum () {
    return this._currNum
  }

  reset () {
    this._result = null
    this._currNum = null
    this._currOpe = null
    this._isEq = false
  }

  add () {
    this.operation(this.operations.add)
  }

  remove () {
    this.operation(this.operations.remove)
  }

  multiply () {
    this.operation(this.operations.multiply)
  }

  divide () {
    this.operation(this.operations.divide)
  }

  total () {
    this.operation()
  }

  operation (ope = this.operations.total) {
    switch (this._currOpe) {
      case this.operations.add:
        this._result = this._result + this._currNum
        break
      case this.operations.remove:
        this._result = this._result - this._currNum
        break
      case this.operations.divide:
        this._result = this._result / this._currNum
        break
      case this.operations.multiply:
        this._result = this._result * this._currNum
        break
      case this.operations.total:
      default:
        this._result = this._currNum
    }
    this._currOpe = ope
    this._currNum = this._result
    this._isEq = true
  }

  stack (num) {
    if (!this._currNum || this._isEq) {
      this._currNum = 0
      this._isEq = false
    }

    this._currNum = +(String(this._currNum) + String(num))
  }
}
