const Category = ({ category, setUrl, BASE_URL, API_KEY }) => {
	return (
		<div className="category mt-4">
			<button
				className="categoryBtn"
				onClick={() => {
					setUrl(`${BASE_URL}topic=${category.toLowerCase()}&${API_KEY}`);
				}}>
				{category}
			</button>
		</div>
	);
};

export default Category;
