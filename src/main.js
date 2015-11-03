import XHREvent from './xhrEvent';
import XHRHelper from './xhrHelper';

if (this.window && this.XMLHttpRequest) {
  const xhrHelper = new XHRHelper(this.window, this.XMLHttpRequest);
  XHREvent.start(xhrHelper, XMLHttpRequest);
}

module.exports = {
  XHREvent,
  XHRHelper
}
