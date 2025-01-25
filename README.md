# Node.js Express Server Timeout Issue

This repository demonstrates a common issue in Node.js Express servers where a delay in processing requests can cause client-side timeouts. The `bug.js` file shows an Express server with a 5-second delay before sending a response.  This delay can lead to issues if clients have shorter timeout settings.

The `bugSolution.js` file provides a solution using appropriate techniques to handle long-running tasks and prevent timeouts.

## Bug
The bug lies in the synchronous nature of the `setTimeout` call within the request handler.  For longer tasks, this blocks the event loop, preventing other requests from being processed and potentially leading to timeout errors on the client side.