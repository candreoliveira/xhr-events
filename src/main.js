import XHRHelper from './xhrHelper';

const xhrHelper = new XHRHelper(window, XMLHttpRequest);

XMLHttpRequest.prototype.open = function () {
  this.onloadstart = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {loadStartDate: new Date()});
    xhrHelper.dispatchNewMessage('XHRLoadStart', Object.assign({event}, xhrHelper.dates));
  }

  this.onloadend = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {loadEndDate: new Date()});
    xhrHelper.dispatchNewMessage('XHRLoadEnd', Object.assign({event}, xhrHelper.dates));
  }

  this.onload = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {loadDate: new Date()});
    xhrHelper.dispatchNewMessage('XHRLoad', Object.assign({event}, xhrHelper.dates));
  }

  this.onabort = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {abortDate: new Date()});
    xhrHelper.dispatchNewMessage('XHRAbort', Object.assign({event}, xhrHelper.dates));
  }

  this.ontimeout = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {timeoutDate: new Date()});
    xhrHelper.dispatchNewMessage('XHRTimeout', Object.assign({event}, xhrHelper.dates));
  }

  this.onerror = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {errorDate: new Date()});
    xhrHelper.dispatchNewMessage('XHRError', Object.assign({event}, xhrHelper.dates));
  }

  this.onprogress = (event) => {
    xhrHelper.dates = Object.assign(xhrHelper.dates, {progressDates: xhrHelper.dates.progressDates.concat([new Date()])});
    xhrHelper.dispatchNewMessage('XHRProgress', Object.assign({event}, xhrHelper.dates));
  }

  xhrHelper.xmlHttpRequestOpen.apply(this, arguments);
}
