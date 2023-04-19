import { http } from "@blockless/sdk"

/**
 * Fetch sample JSON content and serve.
 * 
 */
http.HttpComponent.serve((req: http.Request) => {
  const response = new http.Client().get('https://httpbin.org/json')

  return new http.Response(response.stringify())
    .header('Content-Type', 'application/json')
    .status(200)
})