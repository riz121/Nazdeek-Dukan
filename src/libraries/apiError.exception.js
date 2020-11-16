const httpStatus = require('http-status');

class APIError extends Error {
    constructor(message, errorKey, statusCode) {
        super(message);
        this.message = message;
        this.errorKey = errorKey;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }

    static createFromObject(errorProperties) {
        return new this(
            errorProperties.message || 'An unkown problem occured',
            errorProperties.key || 'UNKOWN_ERROR',
            errorProperties.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}

module.exports = APIError;