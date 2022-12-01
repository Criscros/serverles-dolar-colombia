
var  trmApi = require("trm-api").default
const TrmApi = new trmApi("")

exports.getAllItemsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }

   return TrmApi.latest().then((data)=>{
        console.log('***',data);

        return  {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    })

}
