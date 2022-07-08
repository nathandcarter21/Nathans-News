import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import Articles from "./Articles";
import Error from "./Error";

const Body = () => {
	let [articles, setArticles] = useState([]);
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState(false);
	let [query, setQuery] = useState(null);
	const BASE_URL = "https://gnews.io/api/v4/top-headlines?lang=en&";
	const API_KEY = `token=${process.env.REACT_APP_MY_API_KEY}`;
	let [url, setUrl] = useState(`${BASE_URL}${API_KEY}`);

	const getQuery = (value) => {
		setQuery(value.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (query !== null && query !== "") {
			setUrl(`${BASE_URL}q=${query}&${API_KEY}`);
		}
	};
	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				// if (response.data.status !== "ok") {
				// 	setError(true);
				// 	throw Error();
				// }

				setArticles(response.data.articles);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
				setError(true);
			});
	}, [url]);

	if (loading) {
		return <h1 className="mx-3">Is Loading...</h1>;
	} else if (error || articles.length === 0) {
		return <Error />;
	} else {
		return (
			<div className="body">
				<div className="searchBar d-flex justify-content-end mt-3">
					<form onSubmit={handleSubmit}>
						<input type="text" className="search" onChange={getQuery} />
						<Button
							variant="outline-primary"
							size="sm"
							className="mx-3"
							onClick={handleSubmit}>
							Search
						</Button>
					</form>
				</div>
				<div className="categories d-flex justify-content-evenly align-items-center flex-wrap ">
					<Category
						category={"Breaking News"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						API_KEY={API_KEY}
					/>
					<Category
						category={"Business"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						API_KEY={API_KEY}
					/>
					<Category
						category={"Entertainment"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						API_KEY={API_KEY}
					/>
					<Category
						category={"Science"}
						setUrl={setUrl}
						BASE_URL={BASE_URL}
						API_KEY={API_KEY}
					/>
				</div>

				<Articles articles={articles} />
			</div>
		);
	}
};

export default Body;
