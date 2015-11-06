import ObjectAssign from 'object-assign';
import XHRTiming from './xhrTiming';

export default class XHREvent {
  static start(xhrHelper, XMLHttpRequest) {
    XMLHttpRequest.prototype.open = function () {
      let xhrTiming = new XHRTiming();

      this.onloadstart = (XMLHttpRequestEvent) => {
        xhrTiming.loadStartDate = new Date();
        xhrHelper.dispatchNewMessage('XHRLoadStart', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onloadend = (XMLHttpRequestEvent) => {
        xhrTiming.loadEndDate = new Date();
        xhrHelper.dispatchNewMessage('XHRLoadEnd', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onload = (XMLHttpRequestEvent) => {
        xhrTiming.loadDate = new Date();
        xhrHelper.dispatchNewMessage('XHRLoad', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onabort = (XMLHttpRequestEvent) => {
        xhrTiming.abortDate = new Date();
        xhrHelper.dispatchNewMessage('XHRAbort', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.ontimeout = (XMLHttpRequestEvent) => {
        xhrTiming.timeoutDate = new Date();
        xhrHelper.dispatchNewMessage('XHRTimeout', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onerror = (XMLHttpRequestEvent) => {
        xhrTiming.errorDate = new Date();
        xhrHelper.dispatchNewMessage('XHRError', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      this.onprogress = (XMLHttpRequestEvent) => {
        xhrTiming.progressDates = xhrTiming.progressDates.concat([new Date()]);
        xhrHelper.dispatchNewMessage('XHRProgress', ObjectAssign({XMLHttpRequestEvent}, xhrTiming.dates()));
      }

      xhrHelper.xmlHttpRequestOpen.apply(this, arguments);
    }
  }
}
