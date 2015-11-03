import XHREvent from './xhrEvent.js';
import XHRHelper from './xhrHelper';

const xhrHelper = new XHRHelper(window, XMLHttpRequest);
XHREvent.start(xhrHelper, XMLHttpRequest);

module.exports = {
  XHREvent
  XHRHelper
}
