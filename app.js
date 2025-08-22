const express = require('express');
const server = express();

function serverOn(){
    server.listen(3000)
    console.log('Running Server port 3000')
};

serverOn();

export{
    serverOn
}