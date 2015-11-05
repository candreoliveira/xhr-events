import XHREvent from './xhrEvent';
import XHRData from './xhrData';

const config = {
  start: function() {
    if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
      XHREvent.start((new XHRData(window, XMLHttpRequest)), XMLHttpRequest);
    }
  }
};

config.start();
module.exports = config;
