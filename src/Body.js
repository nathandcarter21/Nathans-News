import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Load from "./Load";
import Category from "./Category";
import Articles from "./Articles";

const Body = () => {
	let [articles, setArticles] = useState([
		{
			source: {
				id: null,
				name: "Gizmodo.com",
			},
			author: "Shoshana Wodinsky",
			title: "Google's Ad Business Could Finally Crack Open",
			description:
				"While Google’s multiple antitrust cases continue to drag on here in the U.S., it looks like the search giant’s starting to make a few concessions across the pond. Reuters reports that Google’s parent company, Alphabet, has made an offer to European Union regu…",
			url: "https://gizmodo.com/google-youtube-eu-antitrust-ads-change-1849054734",
			urlToImage:
				"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/671dc6bff2ba77cbfc00fda39e7419be.jpg",
			publishedAt: "2022-06-13T21:39:00Z",
			content:
				"While Googles multiple antitrust cases continue to drag on here in the U.S., it looks like the search giants starting to make a few concessions across the pond. Reuters reports that Googles parent co… [+3000 chars]",
		},
		{
			source: {
				id: "engadget",
				name: "Engadget",
			},
			author: "Steve Dent",
			title:
				"Sony Honda Mobility Inc. is the new name of Sony and Honda's EV business",
			description:
				"After Sony and Honda announced plans to form a separate company for their joint electric vehicle partnership, they've now given it a name. Yes, the new business is called Sony Honda Mobility Inc. and will be established in Tokyo before the end of 2022, with E…",
			url: "https://www.engadget.com/sony-and-hondas-independent-ev-business-is-called-sony-honda-mobility-inc-093538621.html",
			urlToImage:
				"https://s.yimg.com/os/creatr-uploaded-images/2022-06/893cd810-ed52-11ec-b7ff-0b3dd3ab42b1",
			publishedAt: "2022-06-16T09:35:38Z",
			content:
				"After Sony and Honda announced plans to form a separate company for their joint electric vehicle partnership, they've now given it a name. Yes, the new business is called Sony Honda Mobility Inc. and… [+1463 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Chris Stokel-Walker",
			title:
				"The Tricky Business of Elon Musk Getting Twitter Fire-Hose Access",
			description:
				"Twitter has reportedly given the billionaire access to its full stream of tweets and related user data. Is your privacy in jeopardy?",
			url: "https://www.wired.com/story/elon-musk-twitter-firehose/",
			urlToImage:
				"https://media.wired.com/photos/62a393d78eaf9419b31098a5/191:100/w_1280,c_limit/musk_sec_GettyImages-1395062612.jpg",
			publishedAt: "2022-06-10T19:01:24Z",
			content:
				"Elon Musks never-ending attempt to take over Twitter has taken yet another weird turn as the social media platform appears to have acceded to the entrepreneurs request to gain access to a fire hose o… [+3082 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Will Knight",
			title: "China Built Your iPhone. Will It Build Your Next Car?",
			description:
				"Gadget manufacturers are getting into the car-making business. That could shake up the auto industry, global trade, and geopolitics.",
			url: "https://www.wired.com/story/foxconn-apple-car-china/",
			urlToImage:
				"https://media.wired.com/photos/62abb1d61adf15cb4e383623/191:100/w_1280,c_limit/ChinaElectric-01.png",
			publishedAt: "2022-06-27T11:00:00Z",
			content:
				"Rumors of an Apple electric car project have long excited investors and iPhone enthusiasts. Almost a decade after details of the project leaked, the Cupertino-mobile remains mythicalbut that hasnt st… [+2952 chars]",
		},
	]);
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState(false);
	let [url, setUrl] = useState("google.com");
	let [numArticles, setNumArticles] = useState(1);

	const addNumArticles = () => {
		if (articles.length > numArticles) {
			setNumArticles(numArticles + 1);
		}
	};
	useEffect(() => {
		setNumArticles(1);
		// axios
		// 	.get(url)
		// 	.then((response) => {
		// 		if (response.data.status !== "ok") {
		// 			setError(true);
		// 			throw Error();
		// 		}
		// 		setArticles(response.data.articles);
		// 		setLoading(false);
		// 	})
		// 	.catch(() => {
		// 		console.log("There was an error");
		// 		setLoading(false);
		// 		setError(true);
		// 	});
		console.log("fetching data");
		setLoading(false);
	}, [url]);

	if (loading) {
		return <h1 className="ms-3">Is Loading...</h1>;
	} else if (error) {
		return (
			<h1 className="text-center">
				Error!!! This is likely due to too many requests to the server. Please
				come back later :)
			</h1>
		);
	} else {
		return (
			<div className="body">
				<div className="categories d-flex justify-content-evenly align-items-center flex-wrap ">
					<Category category={"Business"} setUrl={setUrl} />
					<Category category={"Crypto"} setUrl={setUrl} />
					<Category category={"Econ"} setUrl={setUrl} />
					<Category category={"Finance"} setUrl={setUrl} />

					<input
						type="text"
						placeholder="Search"
						className="search mt-4 mx-3"
					/>
				</div>
				<Articles articles={articles} numArticles={numArticles} />
				<div className="text-center mb-4">
					<Button
						className=""
						onClick={() => {
							setNumArticles(1);
						}}>
						Back to 25
					</Button>
				</div>
				<Load
					addNumArticles={addNumArticles}
					numArticles={numArticles}
					totalArticles={articles.length}
				/>
				<Button
					onClick={() => {
						setArticles([]);
					}}>
					Blow up
				</Button>
			</div>
		);
	}
};

export default Body;
