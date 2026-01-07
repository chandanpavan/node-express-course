const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  //   console.log("user has hit the server");
  //   res.end("Home page");
  //  console.log(req.method);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home page<h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page<h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found<h1>");
    res.end();
  }
});

server.listen(4000);
