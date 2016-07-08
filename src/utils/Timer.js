export default class Timer {
  constructor (callback, delay) {
    this._callback = callback
    this._remaining = delay
    this.resume()
  }

  pause () {
    this.clear()
    this._remaining -= new Date() - this.start
  }

  resume () {
    this._start = new Date()
    this.clear()
    this.timerId = setTimeout(this._callback, this._remaining)
  }

  clear () {
    clearTimeout(this._timerId)
  }
}
