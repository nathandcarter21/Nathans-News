const Category = ({
	category,
	setUrl,
	BASE_URL,
	COUNTRY,
	PAGE_SIZE,
	API_KEY,
}) => {
	return (
		<div className="category mt-4">
			<button
				className="categoryBtn"
				onClick={() => {
					setUrl(
						`${BASE_URL}top-headlines?${COUNTRY}${PAGE_SIZE}&category=${category.toLowerCase()}${API_KEY}`
					);
				}}>
				{category}
			</button>
		</div>
	);
};

export default Category;
