//bring in reference to Express using require that comes from common js module system
const express = require('express')

//create Express or tell Express that we want to have an app/server that I can configure, add endpoints and resources to, and have it listen for connections so it can answer to requests coming into the server

//this will give me an instance of a server that is powered by Express
const server = express()

//and client that 
//Express provides an api that I can use to configure my server. Part of that API is a set of methods that correspond to http methods/verbs
//http is the communication protocol/rules that we use to communicate with client and server. It powers the internet. A lot of the data that is transmitted is strings of text. Each side of the communication (client or server) knows what to do with the strings and how to produce strings to send back responses
//server.get tells the server to pay attention to any get requests (any request over http that uses get method) and if it's a get rquest to this particular url ('/' is the root of our API for example api.com/), execute the following cb function (req, res) =>... only if the verb of the request is get and the url is /
//(req, res) => {} is a reqest handler function. Express provides this function with the arguments req and res
//req is a request object and res is a response object. We use these objects and the methods in them, to do things
//response obj has a send method to send back info to the client
//some of the request and response methods are provided my Node and some are provided by Express
server.get('/', (req, res) => {

})

//now tell express to listen to requests coming into a particular port on my computer and answer to those requests
//first argument is port
//second argument is cb
server.listen(8000, () => console.log('API running on port 8000'))

//up to this point, we have an actual server and will run but there are no endpoints configured yet
//adding endpoint above on line 9


