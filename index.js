const express = require("express"); //imported express
const port = 3000; //allocated port 3000 to run http server on this machine
const app = express(); //created a instance of express
const fs = require("fs").promises; //created a instance of fs(fileserver) to manage file read/write operations
app.get("/files", async function (req, res) {
  //created endpoint to get filenames
  const fileNames = await fs.readdir("./Files", "utf-8"); //awaiting to get the filesnames from ./Files dir
  res.send(fileNames); //sending filesnames as a response to client
});
app.get("/files/:filename", async function (req, res) {
  //created endpoint to get filedata
  const fileName = req.params.filename; //read filenames passed from url from client request
  const filedata = await fs.readFile(`./Files/${fileName}`, "utf8"); //read data of particular file using fs inbuilt method
  res.send(filedata); //sending file read data as a response to client.
});
app.listen(port, function () {
  //starting the express server and on the port 300 as declared above
  console.log("Server is running on " + port); //logging to console that the server instance is started and  running
});
