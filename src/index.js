"use strict";
exports.__esModule = true;
var express = require("express");
function runServer() {
    var app = express();
    app.listen(5000, function () {
        console.log('start server');
    });
}
runServer();
