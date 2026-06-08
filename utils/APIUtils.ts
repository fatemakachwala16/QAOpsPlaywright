export class APIUtils {
    apiContext: any
    loginPayload: any

    constructor(apiContext: any, loginPayload: any)
    {
        this.apiContext = apiContext
        this.loginPayload = loginPayload
    }
    async getToken() {
        //login
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            { data: this.loginPayload })
        const loginJSONResponse = await loginResponse.json()
        const token = loginJSONResponse.token
        console.log(token)
        return token
    }

    async createOrder(orderPayload: any)
    {
        let response:any = {}
        response.token = await this.getToken()
        const createOrderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
                {
                    data: orderPayload,
                    headers: { 'Authorization': response.token }
                }
            )

            const createOrderJSONResponse = await createOrderResponse.json()
            const orderID = createOrderJSONResponse.orders[0]
            response.orderID = orderID
            return response
    }
}
