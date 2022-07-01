import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Load from "./Load";
import Category from "./Category";
const url =
	"https://newsapi.org/v2/everything?q=business&apiKey=76a5bed9e5d34c449994a27be24bcfa7";

const stock =
	"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const Body = () => {
	let [numArticles, setNumArticles] = useState(1);
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
	let [rendArticles, setRendArticles] = useState([]);
	// let [url, setUrl] = useState("stonks");
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState(false);

	const addNumArticles = () => {
		if (articles.length > numArticles) {
			setNumArticles(numArticles + 1);
		}
	};
	const loadArticles = () => {
		const res = articles.filter((article, index) => index < numArticles);
		setRendArticles(res);
	};

	useEffect(() => {
		if (numArticles === 1) {
			loadArticles();
		} else {
			setNumArticles(1);
		}

		//loadArticles();wont need this because every time we change data we will also want to set num articles to 1 which will run the other use effect

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [articles]);
	useEffect(() => {
		loadArticles();
		//need one to only loadMore when the num changes and need the other use effect for when we need to load new data like when the url changes

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [numArticles]);
	useEffect(() => {
		// setLoading(true);
		// axios
		// 	.get(url)
		// 	.then((response) => {
		// 		console.log(response.data.articles);
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
	}, []);

	if (loading) {
		return <h1>Is Loading...</h1>;
	} else if (error) {
		return <h1>Error</h1>;
	} else {
		return (
			<div className="body">
				<div className="categories d-flex justify-content-evenly align-items-center flex-wrap ">
					<Category category={"Business"} />
					<Category category={"Finance"} />
					<Category category={"Crypto"} />
					<Category category={"Science"} />
					<input
						type="text"
						placeholder="Search"
						className="search mt-4 mx-3"
					/>
				</div>
				<div className="news d-flex justify-content-around flex-wrap">
					{rendArticles.map((article, index) => (
						<Card className="cardd m-4" key={index}>
							<Card.Img variant="top" src={article.urlToImage || stock} />
							<Card.Body className="d-flex">
								<Card.Title>{article.title}</Card.Title>
							</Card.Body>
							<Card.Body className="d-flex">
								<Card.Text>{article.content.slice(0, 200)}</Card.Text>
							</Card.Body>
							<Card.Body className="d-flex">
								<Card.Link
									href={article.url}
									target="_blank"
									className="btn btn-primary cardLink">
									Go to article
								</Card.Link>
							</Card.Body>
						</Card>
					))}
				</div>
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
						setLoading(true);
					}}>
					Blow up
				</Button>
			</div>
		);
	}
};

export default Body;
