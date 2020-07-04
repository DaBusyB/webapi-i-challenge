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
//some of the request and response methods are provided my Node and some are provided by Express or agumented with new functionality by Express
server.get('/', (req, res) => {
    res.send('Hello world!')
})

//the endpoint above just returns a string
//in real life, most responses will be in json
//this time, lets return a json list of hobbits from the url /hobbits
server.get('/hobbits', (req, res) => {
    //create a list of hobbits
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee'
        },

        {
            id: 2,
            name: 'Frodo Baggins'
        }
    ]

    //now parse it, turn it into a string respecting the json format (double quotes, etc)
    //Express will do JSON formatting for us
    //http status codes tells client whether specific http request has been sucessfully completed
    //a part of designing a good API is always returning the correct https response status code

    //we could do this: res.status(200).send(hobbits)
    //but we want to communicat to next dev that this isnt just sending some data, we're sending JSON
    //the client could also be formatted to say that it wants JSON
    //if the client has no preference then it's probably best to send JSON
    //so instead we will use this
    res.status(200).json(hobbits)

})

//now tell express to listen to requests coming into a particular port on my computer and answer to those requests
//first argument is port
//second argument is cb
server.listen(8000, () => console.log('API running on port 8000'))

//up to this point, we have an actual server and will run but there are no endpoints configured yet
//adding endpoint above on line 9

//the basic rundown is
// 1 bring in Express
// 2 create Express app
// 3 Wire endpoints that we want to listen to
// 4 Produce a response and send it back to client within the route handler function of the endpoint
// 5 Tell server to listen to connection on particular port


