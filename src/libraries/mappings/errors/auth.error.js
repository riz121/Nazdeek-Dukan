const httpStatus = require('http-status');

module.exports = {
    ACCOUNT_NOT_FOUND: {
        message: 'No such account exist',
        key: 'ACCOUNT_NOT_FOUND',
        statusCode: httpStatus.NOT_FOUND,
    },
    ACCOUNT_ALREADY_EXIST: {
        message: 'An account with this email/phone already exist',
        key: 'ACCOUNT_ALREADY_EXIST',
        statusCode: httpStatus.CONFLICT,
    },
}