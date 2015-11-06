import XHREvent from './xhrEvent';
import XHRData from './xhrData';

const config = {
  start: function() {
    XHREvent.start(XMLHttpRequest);
  }
};

module.exports = config;

if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
  window.XHREvents = config;
}
