module.exports = class AppError extends (
  Error
) {
  constructor(errorType, message, status) {
    // Calling parent constructor of base Error class.
    super(message);

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // Additional properties.

    this.errorType = errorType || 'No error type provided';
    this.status = status || 500;
  }
};
