

export default class Launch {
  constructor(details, number, succeeded, year) {
    this.details = details;
    this.number = number;
    this.succeeded = succeeded;
    this.year = year;
  }
  wasFailure() {
    if (this.succeeded) {
      return false
    }
    else {
      return true
    }
  }
  launchInfo() {
    return `Year: ${this.year} - Flight Number: ${this.number} - Description: ${this.details}`
  }
}