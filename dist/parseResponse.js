"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponse = void 0;
const responses_1 = require("./responses");
const unhandledErrorResponse = {
    error: true,
    message: 'There was an unhandled error. Please try again'
};
exports.parseResponse = (response, parseOptions = {}) => {
    const { shouldDispatch = false } = parseOptions;
    if (response && response.status && (response.status === 401 || response.status === 403) && shouldDispatch) {
        // If user is attemtping to hit a non-public endpoint with invalid credentials, log them out
        const { dispatch = () => { }, dispatchType = '', payload = {} } = parseOptions;
        dispatch({ type: dispatchType, payload });
        return unhandledErrorResponse;
    }
    else if (response.status) {
        const { status } = response;
        return responses_1.responses[status] || unhandledErrorResponse;
    }
    else {
        return unhandledErrorResponse;
    }
};
//# sourceMappingURL=parseResponse.js.map