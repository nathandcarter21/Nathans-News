import { Row, Container, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Load from "./Load";

const stock =
	"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const Body = () => {
	let [numArticles, setNumArticles] = useState(1);
	let [articles, setArticles] = useState([
		{
			source: {
				id: null,
				name: "Tech Times",
			},
			author: "Griffin Davis",
			title:
				"Tesla Cybertruck Inspired by James Bond Submarine Car? Here's What You Need To Know About 'Wet Nellie'",
			description: 'Here\'s what you need to know about "Wet Nellie."',
			url: "https://www.techtimes.com/articles/276895/20220619/tesla-cybertruck-inspired-james-bond-submarine-car-heres-what-need.htm",
			urlToImage:
				"https://1734811051.rsc.cdn77.org/data/images/full/406780/tesla-cybertruck-inspired-by-james-bond-submarine-car-heres-what-you-need-to-know-about-wet-nellie.jpg",
			publishedAt: "2022-06-19T20:40:00Z",
			content:
				"The Tesla Cybertruck is one of the most popular inventions of Elon Musk. This zero-emission pickup truck made headlines after its iconic endurance test back in 2019.\r\nDuring this public demonstration… [+2373 chars]",
		},
		{
			source: {
				id: null,
				name: "MobileSyrup",
			},
			author: "Karandeep Oberoi",
			title:
				"13-year-old from Saskatoon among Apple’s Swift Student Challenge winners",
			description:
				"Drake Jordan, who started coding just two years ago after being intrigued by Apple’s Worldwide Developer Conference naturally experiences synesthesia, a perception phenomenon where the stimulation of one sense involuntarily leads to the stimulation of another…",
			url: "https://mobilesyrup.com/2022/06/19/13-year-old-from-saskatoon-among-apples-swift-student-challenge-winners/",
			urlToImage:
				"https://cdn.mobilesyrup.com/wp-content/uploads/2022/06/Drake-Jordan-Tim-cook-header.jpg",
			publishedAt: "2022-06-19T20:01:37Z",
			content:
				"Apple hosts its Swift Student Challenge annually that tasks participating youngsters globally to display their coding skills by creating a Swift Playground app project on the topic of their choice.\r\n… [+1650 chars]",
		},
		{
			source: {
				id: null,
				name: "The Daily Hodl",
			},
			author: "Daily Hodl Staff",
			title:
				"These Three Catalysts Could Spark a Bitcoin (BTC) Reversal, According to Top Crypto Analyst",
			description:
				"A closely followed crypto analyst is identifying three catalysts that could lead to a reversal of Bitcoin (BTC) as the benchmark cryptocurrency hovers below $20,000. In a new strategy session, the host of InvestAnswers tells his 441,000 YouTube subscribers th…",
			url: "https://dailyhodl.com/2022/06/19/these-three-catalysts-could-spark-a-bitcoin-btc-reversal-according-to-top-crypto-analyst/",
			urlToImage:
				"https://dailyhodl.com/wp-content/uploads/2022/03/bitcoin-price-action.jpg",
			publishedAt: "2022-06-19T20:00:43Z",
			content:
				"A closely followed crypto analyst is identifying three catalysts that could lead to a reversal of Bitcoin (BTC) as the benchmark cryptocurrency hovers below $20,000.\r\nIn a new strategy session, the h… [+1837 chars]",
		},
		{
			source: {
				id: null,
				name: "CarScoops",
			},
			author: "Brad Anderson",
			title:
				"These Are The Cars And Trucks With The Highest And Lowest Depreciation In The USA",
			description:
				"The Toyota Tacoma only drops 21.93% in value in the first three years of ownership",
			url: "https://www.carscoops.com/2022/06/toyota-tacoma-holds-its-value-best-in-the-u-s-while-kia-sorento-depreciates-the-most/",
			urlToImage:
				"https://www.carscoops.com/wp-content/uploads/2022/06/New-Car-Values-1a.jpg",
			publishedAt: "2022-06-19T18:50:34Z",
			content:
				"If youre shopping for a new vehicle in the U.S. that will hold its value well, buying a pickup truck could be the best option.\r\nAn analysis from Zutobi has revealed that the three vehicles which hold… [+2114 chars]",
		},
	]);
	let [rendArticles, setRendArticles] = useState(articles);
	let [url, setUrl] = useState("stonks");

	const addNumArticles = () => {
		if (articles.length > numArticles) {
			setNumArticles(numArticles + 1);
		}
	};
	const loadArticles = () => {
		console.log("mefaisfhjdshfsh");
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
	}, [url]);
	useEffect(() => {
		loadArticles();
		//need one to only loadMore when the num changes and need the other use effect for when we need to load new data like when the url changes

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [numArticles]);

	return (
		<div className="body">
			<div className="news d-flex justify-content-around flex-wrap">
				{rendArticles.map((article, index) => (
					<Card className="cardd m-4">
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
					setUrl("nah mate");
				}}>
				Blow up
			</Button>
		</div>
	);
};

export default Body;
