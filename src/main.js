import XHREvent from './xhrEvent';
import XHRHelper from './xhrHelper';

if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
  const xhrHelper = new XHRHelper(window, XMLHttpRequest);
  XHREvent.start(xhrHelper, XMLHttpRequest);
}

module.exports = {
  XHREvent,
  XHRHelper
}
