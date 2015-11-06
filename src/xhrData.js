import Message from './message';

export default class XHRData {
  constructor(window) {
    this.document = window && window.document;
    this.window = window;
  }

  dispatchNewMessage(name, data) {
    let message = new Message(this.window, name, data);
    return message.dispatchMessage(this.document);
  }
}
