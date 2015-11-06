export default class XHRTiming {
  constructor() {
    this.loadStartDate = null;
    this.loadEndDate = null;
    this.loadDate = null;
    this.abortDate = null;
    this.timeoutDate = null;
    this.errorDate = null;
    this.progressDates = [];
  }

  dates() {
    return {
      loadStartDate: this.loadStartDate,
      loadEndDate: this.loadEndDate,
      loadDate: this.loadDate,
      abortDate: this.abortDate,
      timeoutDate: this.timeoutDate,
      errorDate: this.errorDate,
      progressDates: this.progressDates
    }
  }
}