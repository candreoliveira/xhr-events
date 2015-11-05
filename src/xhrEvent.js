import ObjectAssign from 'object-assign';

export default class XHREvent {
  static start(xhrHelper, XMLHttpRequest) {
    XMLHttpRequest.prototype.open = function () {
      this.onloadstart = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {loadStartDate: new Date()});
        xhrHelper.dispatchNewMessage('XHRLoadStart', ObjectAssign({event}, xhrHelper.dates));
      }

      this.onloadend = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {loadEndDate: new Date()});
        xhrHelper.dispatchNewMessage('XHRLoadEnd', ObjectAssign({event}, xhrHelper.dates));
      }

      this.onload = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {loadDate: new Date()});
        xhrHelper.dispatchNewMessage('XHRLoad', ObjectAssign({event}, xhrHelper.dates));
      }

      this.onabort = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {abortDate: new Date()});
        xhrHelper.dispatchNewMessage('XHRAbort', ObjectAssign({event}, xhrHelper.dates));
      }

      this.ontimeout = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {timeoutDate: new Date()});
        xhrHelper.dispatchNewMessage('XHRTimeout', ObjectAssign({event}, xhrHelper.dates));
      }

      this.onerror = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {errorDate: new Date()});
        xhrHelper.dispatchNewMessage('XHRError', ObjectAssign({event}, xhrHelper.dates));
      }

      this.onprogress = (event) => {
        xhrHelper.dates = ObjectAssign(xhrHelper.dates, {progressDates: xhrHelper.dates.progressDates.concat([new Date()])});
        xhrHelper.dispatchNewMessage('XHRProgress', ObjectAssign({event}, xhrHelper.dates));
      }

      xhrHelper.xmlHttpRequestOpen.apply(this, arguments);
    }
  }
}
