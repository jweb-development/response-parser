import { IRequestResponse, IParseResponse, responses } from './responses'

const unhandledErrorResponse = {
  error: true,
  message: 'There was an unhandled error. Please try again'
}

export const parseResponse = (response: IRequestResponse, parseOptions: IParseResponse = {}): any => {
  const { shouldDispatch = false } = parseOptions

  if (response.status && response.status === 401 && shouldDispatch) {
    // If user is attemtping to hit a non-public endpoint with invalid credentials, log them out
    const { dispatch = () => { }, dispatchType = '', payload = {} } = parseOptions
    dispatch({ type: dispatchType, payload })
    return false
  } else if (response.status) {
    const { status } = response
    return responses[status] || unhandledErrorResponse
  } else {
    return unhandledErrorResponse
  }
}
