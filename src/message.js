export default class Message {
  constructor(window, name, data) {
    this.document = window && window.document;
    this.window = window;
    this.data = data;

    if(this.document.createEvent && this.window.CustomEvent && this.window.CustomEvent.prototype.initCustomEvent) {
      let event = this.document.createEvent('CustomEvent');
      event.initCustomEvent(name, true, true, data);
      this.event = event;
    } else if(this.window && this.window.CustomEvent) {
      try {
        this.event = new CustomEvent(name, data);
      } catch (e) {
        this.event = null;
      }
    } else {
      this.event = null;
    }
  }

  dispatchMessage(from) {
    if (from && from.dispatchEvent && this.event) {
      return from.dispatchEvent(this.event);
    }
    return false;
  }
}
