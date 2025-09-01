const fs = require("fs");

fs.writeFile("hello.txt", "hello world", (err) => {
    if (err) throw err;
    console.log("The file has been created");
});

fs.readFile("./hello.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});