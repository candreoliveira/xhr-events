import XHREvent from './xhrEvent';
import XHRData from './xhrData';

const config = {
  start: function() {
    XHREvent.start((new XHRData(window, XMLHttpRequest)), XMLHttpRequest);
  }
};

module.exports = config;

if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
  window.XHREvents = config;
}
