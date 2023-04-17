module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let responseMessage = 'x-ms-auth-token = ';
    responseMessage += req.headers['x-ms-auth-token'] ? req.headers['x-ms-auth-token'] : 'none';
    responseMessage += 'x-ms-client-principal = ';
    responseMessage += req.headers['x-ms-client-principal'] ? req.headers['x-ms-client-principal'] : 'none';
    responseMessage += 'x-ms-client-principal-id = ';
    responseMessage += req.headers['x-ms-client-principal-id'] ? req.headers['x-ms-client-principal-id'] : 'none';
    responseMessage += 'x-ms-client-principal-idp = ';
    responseMessage += req.headers['x-ms-client-principal-idp'] ? req.headers['x-ms-client-principal-idp'] : 'none';
    responseMessage += 'x-ms-client-principal-name = ';
    responseMessage += req.headers['x-ms-client-principal-name'] ? req.headers['x-ms-client-principal-name'] : 'none';

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     x-ms-auth-token
// x-ms-client-principal
// x-ms-client-principal-id
// x-ms-client-principal-idp
// x-ms-client-principal-name

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}