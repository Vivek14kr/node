const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
  <div>
   <h1>Heeloooo</h1>
  </div>
  `);
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
 <h1>Opps </h1>
 <a href="/">back home</a>
 `);
  }
});

server.listen(5000, () => {
  console.log("Listening");
});
