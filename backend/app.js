const express = require("express");
const app = express();
const axios = require("axios");

app.get("/api", (req, res) => {
	axios
		.get(
			"https://newsapi.org/v2/everything?q=tesla&from=2022-06-03&sortBy=publishedAt&apiKey=76a5bed9e5d34c449994a27be24bcfa7"
		)
		.then((response) => {
			if (response.data.status !== "ok") {
				setError(true);
				throw Error();
			}
			res.send(response.data.articles);
		})
		.catch(() => {
			console.log("There was an error");
		});
});
app.listen(5000, () => {
	console.log("Listening on port 5000");
});
