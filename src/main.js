import XHREvent from './xhrEvent';
import XHRData from './xhrData';

const config = {
  start: function(window) {
    XHREvent.start(window, XMLHttpRequest, XMLHttpRequest.prototype.open);
  }
};

module.exports = config;

if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
  window.XHREvents = config;
}
