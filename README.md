# Response Parser
This package comprises a JavaScript library meant for parsing and (optionally) performing actions based on responses received from a RESTful API.

## Installation
From your terminal, type the following:
```shell
npm i @jweb-development/response-parser
```

And from there the package should be ready to go.

## Use Case
As we handled a growing number of websites that consumed data from REST APIs, we found it burdensome to implement response handling across each codebase. Moreover, we began using Redux for state management across our code; as we received certain statuses (e.g. "Unauthorized") from the API, we found it necessary to immediately dispatch actions to update state for the entire application (e.g. resetting the state and returning the user to a Login component).

This package hopefully accomplishes both of the above tasks; it is meant to simplify and streamline how responses from APIs are handled on the client side, and can also (optionally) be integrated with state management libraries to perform stateful actions.

## Example Usage
```js
// import the redux action type
const { GET_ORG_CONTACTS } = require('../redux/types')
// import the npm library
const { parseResponse } = require('@jweb-development/response-parser')
// sample api call triggered by the ui
const processInfo = async (
  dispatch = () => { }, apiInfo, fireSuccess = () => { }, fireFailure = () => { }
) => {
  try {
    const { accountID, options } = apiInfo
    // make the api call using fetch
    const response = await window.fetch(`${api}/accounts/${accountID}/info`, options)
    // get the details of the call from the response object
    const parsedResponse = parseResponse(response)
    // check for errors; if there are none then get the data
    if (parsedResponse && !parsedResponse.error) {
      const { data = {} } = await response.json()

      const { apiInfo = {} } = data

      dispatch({ type: GET_ORG_CONTACTS, payload: apiInfo })

      return true
    } else {
      // here, we know the library/status code is an error code, so we fire an error handler
      fireFailure()
      return false
    }
  } catch (err) {
    console.error(err)
    fireFailure()
    return false
  }
}
```

## Running Locally
To run the package locally, pull from source and run `npm run build` to output the package into a dist folder. From there, run `npm i path-to-local-repo` to target the package and install it. Make sure to uninstall the response-parser library first if it has already been downloaded from npm.

## Contributing
This package contains the response codes that we use/see the most, but it is by no means exhaustive. While we hope to make this library more robust in the future, we welcome pull requests that amplify what we've written. Before making a PR, consider writing a unit test in the `test` folder to ensure the code works as expected.