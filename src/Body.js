import { Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import Articles from "./Articles";
import Error from "./Error";
import Search from "./Search";

const Body = () => {
	const BASE_URL = "https://gnews.io/api/v4/";
	const LANG = "?lang=en&";
	const API_KEY = `token=${process.env.REACT_APP_MY_API_KEY}`;
	let [articles, setArticles] = useState([]);
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState(false);
	let [query, setQuery] = useState("");
	let [currCategory, setCurrCategory] = useState("Breaking News");
	let [url, setUrl] = useState(`${BASE_URL}top-headlines${LANG}${API_KEY}`);

	const getQuery = (value) => {
		setQuery(value.target.value.replace(/[^0-9a-z]/gi, ""));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (query === "") {
			setUrl(`${BASE_URL}top-headlines${LANG}topic=breaking-news&${API_KEY}`);
			setCurrCategory("Breaking News");
		} else if (query !== "") {
			setUrl(`${BASE_URL}search${LANG}q=${query}&${API_KEY}`);
			setCurrCategory(null);
		}
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setArticles(response.data.articles);
				setLoading(false);
				setError(false);
			})
			.catch((e) => {
				setLoading(false);
				setError(true);
			});
	}, [url]);

	if (loading) {
		return <Spinner className=" spin" animation="border" variant="primary" />;
	} else if (error) {
		return (
			<Error
				message="Sorry! Something went wrong! This is likely due to too many requests to
		the server. Please come back later!"
			/>
		);
	} else if (articles.length === 0) {
		return (
			<div className="no-content">
				<Search query={query} getQuery={getQuery} handleSubmit={handleSubmit} />
				<h2 className="text-center mt-3">
					Your search did not match any documents.
				</h2>
			</div>
		);
	} else {
		return (
			<div className="body">
				<Search query={query} getQuery={getQuery} handleSubmit={handleSubmit} />
				<div className="categories d-flex justify-content-evenly align-items-center flex-wrap ">
					<Category
						category={"Breaking News"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						API_KEY={API_KEY}
						LANG={LANG}
						currCategory={currCategory}
						setCurrCategory={setCurrCategory}
						setQuery={setQuery}
					/>
					<Category
						category={"Business"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						LANG={LANG}
						API_KEY={API_KEY}
						currCategory={currCategory}
						setCurrCategory={setCurrCategory}
						setQuery={setQuery}
					/>
					<Category
						category={"Entertainment"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						LANG={LANG}
						API_KEY={API_KEY}
						currCategory={currCategory}
						setCurrCategory={setCurrCategory}
						setQuery={setQuery}
					/>
					<Category
						category={"Science"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						LANG={LANG}
						API_KEY={API_KEY}
						currCategory={currCategory}
						setCurrCategory={setCurrCategory}
						setQuery={setQuery}
					/>
				</div>

				<Articles articles={articles} />
			</div>
		);
	}
};

export default Body;
