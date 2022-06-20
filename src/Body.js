import { Row, Container, Col, Card, Button } from "react-bootstrap";

const articles = [
	{
		source: {
			id: null,
			name: "Digitimes",
		},
		author: "DIGITIMES",
		title:
			"India roundup: Made-in-India smartphone shipment grows despite lockdowns in China",
		description:
			"Amid lockdowns in China in the first quarter of 2022, made-in-India smartphone shipment continues to grow. Smartphone manufacturer Bharat FIH is closer to IPO, while manufacturers eligible for the mobile phone PLI are still waiting to receive their cash incen…",
		url: "https://www.digitimes.com/news/a20220620VL200/india-roundup.html",
		urlToImage:
			"https://img.digitimes.com/newsshow/20220620vl200_files/1_b.jpg",
		publishedAt: "2022-06-20T01:57:32Z",
		content:
			"Amid lockdowns in China in the first quarter of 2022, made-in-India smartphone shipment continues to grow. Smartphone manufacturer Bharat FIH is closer to IPO, while manufacturers eligible for the mo… [+2029 chars]",
	},
	{
		source: {
			id: null,
			name: "Daily Beast",
		},
		author: "Ronald K. Fried",
		title: "Is Elon Musk Deliberately Modeling Himself After Henry Ford?",
		description:
			"Photo Illustration by Luis G. Rendon/The Daily Beast/Getty\r\nTo go online and catch the latest Tweet from the world’s richest man is to despair for the fate of Elon Musk. Yes, he’s got all that dough and can daily luxuriate in the thrill of having the world pa…",
		url: "https://www.thedailybeast.com/is-elon-musk-deliberately-modeling-himself-after-henry-ford",
		urlToImage:
			"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1655688318/062022-fried-elonford-hero_ck3fb7",
		publishedAt: "2022-06-20T01:26:05Z",
		content:
			"To go online and catch the latest Tweet from the worlds richest man is to despair for the fate of Elon Musk. Yes, hes got all that dough and can daily luxuriate in the thrill of having the world pay … [+8318 chars]",
	},
	{
		source: {
			id: null,
			name: "Digitimes",
		},
		author: "Kevin Cheng",
		title: "EV startups in dire straits",
		description:
			"Tesla CEO Elon Musk recently warned that US electric vehicle (EV) startups Rivian and Lucid could both go bankrupt if they do not significantly lower their costs.",
		url: "https://www.digitimes.com/news/a20220617PD202/electric-vehicle-startup.html",
		urlToImage:
			"https://img.digitimes.com/newsshow/20220617pd202_files/2_2b.jpg",
		publishedAt: "2022-06-20T01:20:41Z",
		content:
			"Tesla CEO Elon Musk recently warned that US electric vehicle (EV) startups Rivian and Lucid could both go bankrupt if they do not significantly lower their costs.\r\nAccording to media reports, Rivian … [+1723 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "ETtech",
		title:
			"Crypto investors nurse FOMO wounds; Zilingo founders offer to buy troubled firm",
		description:
			"As the bears’ grip on the market tightens, Indian investors who succumbed to FOMO (fear of missing out) and invested in crypto assets are faced with a choice—hang in for years to (hopefully) recoup their money or quit with heavy losses.",
		url: "https://economictimes.indiatimes.com/tech/newsletters/morning-dispatch/crypto-investors-nurse-fomo-wounds-zilingo-founders-offer-to-buy-troubled-firm/articleshow/92322966.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-92322966,width-1070,height-580,imgsize-2173579,overlay-ettech/photo.jpg",
		publishedAt: "2022-06-20T00:30:00Z",
		content:
			"Many Indian investors who dipped their toes into crypto for the first time during last years unprecedented bull run are now staring at huge losses. Bitcoin, which hit an all-time high of around $69,0… [+8970 chars]",
	},
	{
		source: {
			id: null,
			name: "Opensourcesecurity.io",
		},
		author: "Josh Bressers",
		title: "Episode 328 – The Security of Jobs or Job Security",
		description:
			"Josh and Kurt talk about the security of employees leaving jobs. Be it a voluntary departure or in the context of the current layoffs we see, what are the security implications of having to remove …",
		url: "https://opensourcesecurity.io/2022/06/19/episode-328-the-security-of-jobs-or-job-security/",
		urlToImage:
			"https://opensourcesecurityio.files.wordpress.com/2022/06/keyboard-417090_1920.jpg?w=1200",
		publishedAt: "2022-06-20T00:01:00Z",
		content:
			"Josh and Kurt talk about the security of employees leaving jobs. Be it a voluntary departure or in the context of the current layoffs we see, what are the security implications of having to remove ac… [+233 chars]",
	},
	{
		source: {
			id: null,
			name: "BBC News",
		},
		author: "Bbc News",
		title: "Global inflation: Five ways US rate rise will affect you",
		description:
			"The impact of higher interest rates in the US will cascade through the global economy.",
		url: "https://www.bbc.com/news/business-61830923",
		urlToImage:
			"https://ichef.bbci.co.uk/news/1024/branded_news/E462/production/_125466485_98ca58cd8179bb9e5eb0497973099b44de6c9836.jpg",
		publishedAt: "2022-06-19T23:31:51Z",
		content:
			"By Natalie ShermanBusiness reporter, New York\r\nThe US central bank has announced its biggest rate hike in nearly 30 years as it ramps up its battle to bring soaring consumer prices under control. \r\nI… [+5661 chars]",
	},
	{
		source: {
			id: null,
			name: "Yahoo Entertainment",
		},
		author: "Natalie Sherman - Business reporter, New York",
		title: "Global inflation: Five ways US rate rise will affect you",
		description:
			"The impact of higher interest rates in the US will cascade through the global economy.",
		url: "https://news.yahoo.com/global-inflation-five-ways-us-232711645.html",
		urlToImage:
			"https://s.yimg.com/uu/api/res/1.2/o8WtjVNNQLJdhiAbwXMp3g--~B/aD01NDk7dz05NzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/bbc_us_articles_995/b7109e3e8fd765297757d6918c57104b",
		publishedAt: "2022-06-19T23:27:11Z",
		content:
			"People walk past a currency exchange point in Cairo\r\nThe US central bank has announced its biggest rate hike in nearly 30 years as it ramps up its battle to bring soaring consumer prices under contro… [+5710 chars]",
	},
	{
		source: {
			id: "bbc-news",
			name: "BBC News",
		},
		author: "https://www.facebook.com/bbcnews",
		title: "Global inflation: Five ways US rate rise will affect you",
		description:
			"The impact of higher interest rates in the US will cascade through the global economy.",
		url: "https://www.bbc.co.uk/news/business-61830923",
		urlToImage:
			"https://ichef.bbci.co.uk/news/1024/branded_news/E462/production/_125466485_98ca58cd8179bb9e5eb0497973099b44de6c9836.jpg",
		publishedAt: "2022-06-19T23:27:09Z",
		content:
			"By Natalie ShermanBusiness reporter, New York\r\nThe US central bank has announced its biggest rate hike in nearly 30 years as it ramps up its battle to bring soaring consumer prices under control. \r\nI… [+5661 chars]",
	},
	{
		source: {
			id: null,
			name: "Autocar",
		},
		author: null,
		title: "Wiesmann Project Thunderball 2022 review",
		description:
			"Known for retro-style sports cars, this German firm is now set on making a properly engaging EV\n\nIf Wiesmann gets its skates on, the end product of Project Thunderball will be a unique proposition: a fully electric roadster that’s focused on driving satisfact…",
		url: "https://www.autocar.co.uk/car-review/wiesmann/project-thunderball",
		urlToImage:
			"https://www.autocar.co.uk/sites/autocar.co.uk/files/1-wiesmann-project-thunderball-2022-hero-front.jpg",
		publishedAt: "2022-06-19T23:01:23Z",
		content:
			"Steering, brakes and suspension are in even earlier stages of development than the powertrain and a long way from the delightful cohesiveness of the firms E90 BMW M3-engined MF4. But the prototypes s… [+1794 chars]",
	},
	{
		source: {
			id: null,
			name: "Erickimphotography.com",
		},
		author: "ERIC KIM",
		title: "Follow the founder, not the thing.",
		description:
			"Stick with the founder, rather than the company. For example, I am long Tesla and SpaceX, because Elon musk is still the CEO of both companies. The reason why Amazon may be in trouble is because Jeff Bezos has left the company as the CEO.",
		url: "https://erickimphotography.com/blog/2022/06/19/follow-the-founder-not-the-thing/",
		urlToImage:
			"https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2021/11/cropped-selfie-ERIC-KIM-crimson-red-glitch.jpg?fit=512%2C512&ssl=1",
		publishedAt: "2022-06-19T22:19:38Z",
		content:
			"Stick with the founder, rather than the company. For example, I am long Tesla and SpaceX, because Elon musk is still the CEO of both companies. The reason why Amazon may be in trouble is because Jeff… [+38 chars]",
	},
	{
		source: {
			id: null,
			name: "Forbes",
		},
		author:
			"Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
		title:
			"‘I Am’ Buying—Elon Musk Reveals Surprise Crypto Bet Amid $2 Trillion Bitcoin, Ethereum, BNB, XRP, Solana, Cardano And Dogecoin Price Crash",
		description:
			"Tesla﻿ billionaire Elon Musk has said he is still buying the joke bitcoin rival dogecoin and will continue to support it...",
		url: "https://www.forbes.com/sites/billybambrough/2022/06/19/i-am-buying-elon-musk-reveals-surprise-crypto-bet-amid-2-trillion-bitcoin-ethereum-bnb-xrp-solana-cardano-and-dogecoin-price-crash/",
		urlToImage:
			"https://imageio.forbes.com/specials-images/imageserve//60c64fa7ab58a662f3764dfa/0x0.jpg?format=jpg&width=1200",
		publishedAt: "2022-06-19T22:15:37Z",
		content:
			"BitcoinBTC\r\n, ethereum and other major cryptocurrenices have crashed this year, with around $2 trillion erased from the combined market capitalization in a matter of months.\r\nSubscribenow to Forbes' … [+3896 chars]",
	},
	{
		source: {
			id: null,
			name: "Freerepublic.com",
		},
		author: "Nypost",
		title:
			"‘Smug superiority’: Sen. John Barrasso slams Biden’s electric vehicle push",
		description:
			"The Biden administration’s push for Americans to buy electric vehicles even as they confront skyrocketing gas prices when they go to fill up their cars reflects a “smug superiority,” said Sen. John Barrasso in a new interview. Barrasso (R-WY) blasted Presiden…",
		url: "https://freerepublic.com/focus/f-news/4072404/posts",
		urlToImage: null,
		publishedAt: "2022-06-19T21:29:48Z",
		content:
			"Skip to comments.\r\nSmug superiority: Sen. John Barrasso slams Bidens electric vehicle pushNypost ^\r\n | 06/19/2022\r\n | Mark Moore\r\nPosted on 06/19/2022 2:29:48 PM PDT by ChicagoConservative27\r\nThe Bid… [+2882 chars]",
	},
	{
		source: {
			id: null,
			name: "Fox Business",
		},
		author: "Adam Sabes",
		title:
			"Elon Musk congratulates SpaceX team on executing 3 'flawless launches' in 2 days",
		description:
			'Elon Musk congratulated the SpaceX team on executing three "flawless launches" in under a week. The company completed its third rocket launch in a week Sunday.',
		url: "https://www.foxbusiness.com/technology/elon-musk-congratulates-spacex-team-executing-flawless-launches",
		urlToImage:
			"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/04/0/0/GettyImages-1239961009_1280x.jpg?ve=1&tl=1",
		publishedAt: "2022-06-19T21:29:30Z",
		content:
			'Tesla CEO Elon Musk congratulated the SpaceX team for conducting three "flawless launches" in under one week.\r\n"Congrats to SpaceX Falcon team for executing 3 flawless launches in 2 days!, Musk tweet… [+1625 chars]',
	},
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
	{
		source: {
			id: "rt",
			name: "RT",
		},
		author: "RT",
		title: "Apple store unionizes in US first",
		description:
			"Employees at an Apple store in Towson, Maryland have voted to unionize in a first for the tech giant Read Full Article at RT.com",
		url: "https://www.rt.com/news/557454-apple-store-maryland-unionized/",
		urlToImage:
			"https://cdni.russiatoday.com/files/2022.06/article/62af6f6f85f5405837722a2d.jpg",
		publishedAt: "2022-06-19T18:49:07Z",
		content:
			"Employees at the Towson Town Center Apple store in the state of Maryland have voted to unionize, forming the first US union of Apple workers following the conclusion of the vote on Saturday. With 65 … [+2433 chars]",
	},
	{
		source: {
			id: null,
			name: "Livemint",
		},
		author: "Devina Sengupta",
		title:
			"MNCs offer EV lease, salaries for nannies as battle for talent rages",
		description:
			"The initiatives by MNCs also come when India Inc. is tightening purses strings and dialing down discretionary spends like offsites",
		url: "https://www.livemint.com/companies/news/mncs-offer-ev-lease-salaries-for-nannies-as-battle-for-talent-rages-11655659342904.html",
		urlToImage:
			"https://images.livemint.com/img/2022/06/19/600x338/MNCs_1655659425505_1655659436474.jpg",
		publishedAt: "2022-06-19T18:46:06Z",
		content:
			"MUMBAI : Amid stiff competition from Indian legacy firms and startups, and a limited talent pool, multinational companies are wooing prospective employees with perks ranging from electric car lease p… [+3162 chars]",
	},
	{
		source: {
			id: null,
			name: "Johnchow.com",
		},
		author: "John Chow",
		title: "This 1,200+ HP Tesla-Swapped Chevy C10 Is A Ridiculous Ride",
		description:
			"Are you tired for waiting for your Tesla Cybertruck? The good folks at Salvage 2 Savage were, and they decided to take things into their own hands by making their version of a Cybertruck. The end result is pretty ridiculous and extremely fast. Salvage 2 Savag…",
		url: "https://johnchow.com/this-1200-hp-tesla-swapped-chevy-c10-is-a-ridiculous-ride/",
		urlToImage: "https://johnchow.com/wp-content/uploads/2022/06/tesla-c10.jpg",
		publishedAt: "2022-06-19T18:45:24Z",
		content:
			"Are you tired for waiting for your Tesla Cybertruck? The good folks at Salvage 2 Savage were, and they decided to take things into their own hands by making their version of a Cybertruck. The end res… [+2058 chars]",
	},
];
const stock =
	"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const Body = () => {
	return (
		<div className="news">
			<Container>
				<Row className="mt-5">
					{articles.map((article, index) => (
						<Col className="d-flex justify-content-center my-4" key={index}>
							<Card className="cardd">
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
						</Col>
					))}
				</Row>
			</Container>
			<div className="loadMore text-center mb-4">
				<Button className="text-center">Load more</Button>
			</div>
		</div>
	);
};

export default Body;
