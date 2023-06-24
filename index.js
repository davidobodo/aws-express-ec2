const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
	res.send("Hello from the most simply express application in the world");
});

app.listen(process.env.PORT, () => {
	console.log(`==========APP LISTENING ON PORT ${process.env.PORT}`);
});
