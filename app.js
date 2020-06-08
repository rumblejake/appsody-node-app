const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from Appsody Demo! to Hello from Cloud Paks !!!.");
});

app.get("/jake", (req, res) => {
  res.send("Hello Jake");
});

module.exports.app = app;
