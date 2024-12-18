# Silent API Route Failure in Next.js 15

This repository demonstrates a bug in Next.js 15 where an API route can fail silently without providing detailed error messages.  The issue stems from improper error handling within the API route, causing a generic 500 error.  This makes identifying and resolving the underlying problem challenging.

## Bug Description

The `pages/api/data.js` file contains an API route that fetches data from a simulated external API.  The API simulation has a chance of failing.  If the API fails, instead of returning a meaningful error message, the route fails silently with a generic 500 error, hindering the debugging process.

## Solution

The solution involves robust error handling within the API route.  The improved route properly catches and handles the potential `Error` object from the `fetchData` function, providing a more informative error response to the client.