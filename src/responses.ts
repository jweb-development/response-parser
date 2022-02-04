export const responseTypes = {
  SUCCESS: 'SUCCESS',
  NO_CONTENT: 'NO_CONTENT',
  PARTIAL_SUCCESS: 'PARTIAL_SUCCESS',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  UNIMPLEMENTED: 'UNIMPLEMENTED',
};

export interface IStatuses {
  code: number;
  type: string;
  error: boolean;
  message: string;
}

export const responses: { [status: number]: IStatuses } = {
  200: {
    code: 200,
    type: responseTypes.SUCCESS,
    error: false,
    message: 'OK',
  },
  202: {
    code: 202,
    type: responseTypes.SUCCESS,
    error: false,
    message: 'The request has been accepted for processing.',
  },
  204: {
    code: 204,
    type: responseTypes.NO_CONTENT,
    error: false,
    message: 'The requested action has already been performed.',
  },
  206: {
    code: 206,
    type: responseTypes.PARTIAL_SUCCESS,
    error: true,
    message: 'Your request completed successfully, but there was an issue sending out the notification.',
  },
  400: {
    code: 400,
    type: responseTypes.BAD_REQUEST,
    error: true,
    message: 'There was a problem with your request. Please try again.',
  },
  401: {
    code: 401,
    type: responseTypes.UNAUTHORIZED,
    error: true,
    message: 'Unauthorized.',
  },
  403: {
    code: 403,
    type: responseTypes.FORBIDDEN,
    error: true,
    message: 'Forbidden.',
  },
  404: {
    code: 404,
    type: responseTypes.NOT_FOUND,
    error: true,
    message: 'The requested resource could not be found. Please try again.',
  },
  409: {
    code: 409,
    type: responseTypes.DUPLICATE_ENTRY,
    error: true,
    message: 'A resource already exists with those specifications. Please adjust your input and try again.',
  },
  429: {
    code: 429,
    type: responseTypes.TOO_MANY_REQUESTS,
    error: true,
    message:
      'The requested resource has received too many requests. Please wait for the server to process previous requests.',
  },
  500: {
    code: 500,
    type: responseTypes.INTERNAL_ERROR,
    error: true,
    message: 'There was a problem completing your request. Please try again.',
  },
  501: {
    code: 501,
    type: responseTypes.UNIMPLEMENTED,
    error: true,
    message: 'The requested resource has not yet been implemented. Please try again later.',
  },
};

export interface IRequestResponse {
  status: number;
  body?: object;
  type?: string;
  url?: string;
}

export interface IDispatch {
  type: string;
  payload?: object;
}

export interface IParseResponse {
  dispatch?(dispatchOptions: IDispatch): void;
  dispatchType?: string;
  shouldDispatch?: boolean;
  payload?: object;
}
