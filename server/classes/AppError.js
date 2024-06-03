class AppError extends Error {
  constructor(httpStatus, description, clientError) {
    super(description);
    Object.setPrototypeOf(this, AppError.prototype);
    this.httpStatus = httpStatus;
    this.clientError = clientError;
  }
}

export default AppError