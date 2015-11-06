import ObjectAssign from 'object-assign';
import XHRTiming from './xhrTiming';
import XHRData from './xhrData';

export default class XHREvent {
  static start(XMLHttpRequest) {
    const xhr = XMLHttpRequest;

    xhr.prototype.open = function () {
      let xhrTiming = new XHRTiming();
      let xhrData = new XHRData(window, xhr);
      xhrData.request = {
        method: arguments[0],
        url: arguments[1],
        async: arguments[2],
        user: arguments[3],
        password: arguments[4]
      };

      this.onloadstart = (XMLHttpRequestEvent) => {
        xhrTiming.loadStartDate = new Date();
        xhrData.dispatchNewMessage('XHRLoadStart', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onloadend = (XMLHttpRequestEvent) => {
        xhrTiming.loadEndDate = new Date();
        xhrData.dispatchNewMessage('XHRLoadEnd', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onload = (XMLHttpRequestEvent) => {
        xhrTiming.loadDate = new Date();
        xhrData.dispatchNewMessage('XHRLoad', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onabort = (XMLHttpRequestEvent) => {
        xhrTiming.abortDate = new Date();
        xhrData.dispatchNewMessage('XHRAbort', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.ontimeout = (XMLHttpRequestEvent) => {
        xhrTiming.timeoutDate = new Date();
        xhrData.dispatchNewMessage('XHRTimeout', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onerror = (XMLHttpRequestEvent) => {
        xhrTiming.errorDate = new Date();
        xhrData.dispatchNewMessage('XHRError', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onprogress = (XMLHttpRequestEvent) => {
        xhrTiming.progressDates = xhrTiming.progressDates.concat([new Date()]);
        xhrData.dispatchNewMessage('XHRProgress', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      xhrData.xmlHttpRequestOpen.apply(this, arguments);
    }
  }
}
