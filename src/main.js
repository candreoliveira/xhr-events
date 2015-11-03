import XHREvent from './xhrEvent';
import XHRHelper from './xhrHelper';

if (window && XMLHttpRequest) {
  const xhrHelper = new XHRHelper(window, XMLHttpRequest);
  XHREvent.start(xhrHelper, XMLHttpRequest);
}

module.exports = {
  XHREvent
  XHRHelper
}
