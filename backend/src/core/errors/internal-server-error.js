import { CustomError } from './custom-error.js';

// Custom error class for handling "Internal Server" errors in the application.
class InternalServerError extends CustomError {
  constructor(data = '') {
    super('Internal Server Error');
    this.status = 500;
    this.data = data;
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
  serializeErrors() {
    return [{ message: this.data + 'Internal Server Error' }];
  }
}
const _InternalServerError = InternalServerError;
export { _InternalServerError as InternalServerError };
