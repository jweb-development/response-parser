import { IRequestResponse, IParseResponse, responses, IStatuses } from './responses'

export interface IUnhandled {
  error: Boolean,
  message: String
}

const unhandledErrorResponse = {
  error: true,
  message: 'There was an unhandled error. Please try again'
}

export const parseResponse = (response: IRequestResponse, parseOptions: IParseResponse = {}): (IStatuses | IUnhandled) => {
  const { shouldDispatch = false } = parseOptions

  if (response && response.status && (response.status === 401 || response.status === 403) && shouldDispatch) {
    // If user is attemtping to hit a non-public endpoint with invalid credentials, log them out
    const { dispatch = () => { }, dispatchType = '', payload = {} } = parseOptions
    dispatch({ type: dispatchType, payload })
    return unhandledErrorResponse
  } else if (response.status) {
    const { status } = response
    return responses[status] || unhandledErrorResponse
  } else {
    return unhandledErrorResponse
  }
}
