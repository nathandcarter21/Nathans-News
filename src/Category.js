const Category = ({
	category,
	setUrl,
	BASE_URL,
	API_KEY,
	LANG,
	toggleClass,
	currCategory,
	setCurrCategory,
	setQuery,
}) => {
	let classN;
	if (currCategory === category) {
		classN = "categoryBtn categoryBtnActive";
	} else {
		classN = "categoryBtn";
	}
	return (
		<div className="category mt-4">
			<button
				className={classN}
				onClick={() => {
					setCurrCategory(category);
					setQuery("");
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
