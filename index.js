const express = require("express");

const app = express();

const PORT = 5005;

app.get("/", (_req, res) => {
	res.send("Hello from the most simply express application in the world");
});

app.listen(PORT, () => {
	console.log(`==========APP LISTENING ON PORT ${PORT}`);
});
