import { http, json } from "@blockless/sdk"

/**
 * Fetch sample JSON content and serve.
 * 
 */
http.HttpComponent.serve((req: http.Request) => {
  const response = 'Trigger Response'

  const bodyStr = req.body
  const body = json.JSON.parse(bodyStr)

  // 1. Sample Webhook Event
  // Data passed through from the POST /webhook/:id API 
  // bodyStr === JSON.stringify(request.body)

  // 2. Sample Request EVM Event
  // Data passed in from the event listener
  // {
  //   chainId: number,
  //   blockNumber: number,
  //   blockHash: string,
  //   transactionHash: string,
  //   address: string,
  //   event: string,
  //   args: unknown
  // }

  return new http.Response(response.stringify())
    .header('Content-Type', 'application/json')
    .status(200)
})
