const Category = ({ category, setUrl, BASE_URL, API_KEY, LANG }) => {
	return (
		<div className="category mt-4">
			<button
				className="categoryBtn"
				onClick={() => {
					setUrl(
						`${BASE_URL}top-headlines${LANG}topic=${category.toLowerCase()}&${API_KEY}`
					);
				}}>
				{category}
			</button>
		</div>
	);
};

export default Category;
