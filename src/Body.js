import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Load from "./Load";
import Category from "./Category";
import Articles from "./Articles";

const Body = () => {
	let [articles, setArticles] = useState([]);
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState(false);
	let [numArticles, setNumArticles] = useState(20);
	let [query, setQuery] = useState(null);
	const BASE_URL = "https://newsapi.org/v2/";
	const PAGE_SIZE = "&pageSize=100";
	const COUNTRY = "country=us";
	let [url, setUrl] = useState(
		`https://gnews.io/api/v4/top-headlines?lang=en&token=${process.env.REACT_APP_MY_API_KEY}`
	);

	// const addNumArticles = () => {
	// 	if (articles.length > numArticles) {
	// 		setNumArticles(numArticles + 20);
	// 	}
	// };

	const getQuery = (value) => {
		setQuery(value.target.value);
	};
	useEffect(() => {
		setNumArticles(20);
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				// if (response.data.status !== "ok") {
				// 	setError(true);
				// 	throw Error();
				// }

				setArticles(response.data.articles);
				console.log(response.data.articles);
				setLoading(false);
			})
			.catch(() => {
				console.log("There was an error");
				setLoading(false);
				setError(true);
			});
	}, [url]);

	if (loading) {
		return <h1 className="mx-3">Is Loading...</h1>;
	} else if (error) {
		return (
			<h1 className="text-center">
				Error!!! This is likely due to too many requests to the server. Please
				come back later
			</h1>
		);
	} else {
		return (
			<div className="body">
				<div className="searchBar d-flex justify-content-end mt-3">
					<input type="text" className="search" onChange={getQuery} />
					<Button
						variant="outline-primary"
						size="sm"
						className="mx-3"
						onClick={() => {
							// if (query !== null && query !== "") {
							// 	setUrl(`google.com/${query}`);
							// }
						}}>
						Search
					</Button>
				</div>
				<div className="categories d-flex justify-content-evenly align-items-center flex-wrap ">
					<Category
						category={"Business"}
						// setUrl={setUrl}
						// BASE_URL={BASE_URL}
						// PAGE_SIZE={PAGE_SIZE}
						// API_KEY={API_KEY}
						// COUNTRY={COUNTRY}
					/>
					<Category
						category={"Entertainment"}
						// setUrl={setUrl}
						// BASE_URL={BASE_URL}
						// PAGE_SIZE={PAGE_SIZE}
						// API_KEY={API_KEY}
						// COUNTRY={COUNTRY}
					/>
					<Category
						category={"Science"}
						// setUrl={setUrl}
						// BASE_URL={BASE_URL}
						// PAGE_SIZE={PAGE_SIZE}
						// API_KEY={API_KEY}
						// COUNTRY={COUNTRY}
					/>
					<Category
						category={"Sports"}
						// setUrl={setUrl}
						// BASE_URL={BASE_URL}
						// PAGE_SIZE={PAGE_SIZE}
						// API_KEY={API_KEY}
						// COUNTRY={COUNTRY}
					/>
				</div>

				<Articles articles={articles} numArticles={numArticles} />
				<div className="text-center mb-4">
					<Button
						className=""
						onClick={() => {
							setNumArticles(20);
						}}>
						Back to 25
					</Button>
				</div>
				{/* <Load
					addNumArticles={addNumArticles}
					numArticles={numArticles}
					totalArticles={articles.length}
				/> */}
			</div>
		);
	}
};

export default Body;
