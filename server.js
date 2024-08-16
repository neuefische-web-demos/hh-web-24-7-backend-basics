import { createServer } from "node:http";

export const server = createServer((request, response) => {
  console.log("request has been made");
  console.log("request.url: ", request.url);
  console.log("request.method: ", request.method);
  // goal is to send a response

  if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello World");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    return response.end("Good Bye");
  } else {
    response.statusCode = 404;
    return response.end("Not found");
  }

  // response.statusCode = 200;
  // response.end("Hello World :)");
});
