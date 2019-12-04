var braintree = require("braintree");

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'x742hzxzgx6gk233',
    publicKey:    '75n5g58wxn46m2wh',
    privateKey:   '8eec1647c522a4ca2896c353c0072ce5'
});

gateway.clientToken.generate({}, function (err, response) {
    var clientToken = response.clientToken;
    console.log(clientToken);
  });
