"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = exports.responseTypes = void 0;
exports.responseTypes = {
    SUCCESS: 'SUCCESS',
    NO_CONTENT: 'NO_CONTENT',
    PARTIAL_SUCCESS: 'PARTIAL_SUCCESS',
    BAD_REQUEST: 'BAD_REQUEST',
    UNAUTHORIZED: 'UNAUTHORIZED',
    FORBIDDEN: 'FORBIDDEN',
    NOT_FOUND: 'NOT_FOUND',
    DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    UNIMPLEMENTED: 'UNIMPLEMENTED'
};
exports.responses = {
    200: {
        code: 200,
        type: exports.responseTypes.SUCCESS,
        error: false,
        message: 'OK'
    },
    202: {
        code: 202,
        type: exports.responseTypes.SUCCESS,
        error: false,
        message: 'The request has been accepted for processing.'
    },
    204: {
        code: 204,
        type: exports.responseTypes.NO_CONTENT,
        error: true,
        message: 'The requested action has already been performed.'
    },
    206: {
        code: 206,
        type: exports.responseTypes.PARTIAL_SUCCESS,
        error: true,
        message: 'Your request completed successfully, but there was an issue sending out the notification.'
    },
    400: {
        code: 400,
        type: exports.responseTypes.BAD_REQUEST,
        error: true,
        message: 'There was a problem with your request. Please try again.'
    },
    401: {
        code: 401,
        type: exports.responseTypes.UNAUTHORIZED,
        error: true,
        message: 'Unauthorized.'
    },
    403: {
        code: 403,
        type: exports.responseTypes.FORBIDDEN,
        error: true,
        message: 'Forbidden.'
    },
    404: {
        code: 404,
        type: exports.responseTypes.NOT_FOUND,
        error: true,
        message: 'The requested resource could not be found. Please try again.'
    },
    409: {
        code: 409,
        type: exports.responseTypes.DUPLICATE_ENTRY,
        error: true,
        message: 'A resource already exists with those specifications. Please adjust your input and try again.'
    },
    500: {
        code: 500,
        type: exports.responseTypes.INTERNAL_ERROR,
        error: true,
        message: 'There was a problem completing your request. Please try again.'
    },
    501: {
        code: 501,
        type: exports.responseTypes.UNIMPLEMENTED,
        error: true,
        message: 'The requested resource has not yet been implemented. Please try again later.'
    }
};
//# sourceMappingURL=responses.js.map