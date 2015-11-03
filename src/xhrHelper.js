import Message from './message';

export default class XHRHelper {
  constructor(window, xhr) {
    this.xmlHttpRequestOpen = xhr.prototype.open;
    this.document = window && window.document;
    this.window = window;
    this.dates = {
      loadStartDate: null,
      loadEndDate: null,
      loadDate: null,
      abortDate: null,
      timeoutDate: null,
      errorDate: null,
      progressDates: []
    };
  }

  dispatchNewMessage(name, data) {
    let message = new Message(this.window, name, data);
    return message.dispatchMessage(this.document);
  }
}
