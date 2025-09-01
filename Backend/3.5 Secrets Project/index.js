//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url"

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
var userIsAuthorized = false;

function checkPassword(res, req, next) {
    const password = res.body["password"];
    if (password === "iLoveProgramming") {
        userIsAuthorized = true;
    } else {
        userIsAuthorized = false;
    }
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkPassword);

app.get("/", (res, req) => {
    req.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (res, req) => {
    if (userIsAuthorized) {
        req.sendFile(__dirname + "/public/secret.html")
    } else {
        req.sendFile(__dirname + "/public/index.html")
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});