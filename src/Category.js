const Category = ({ category, setUrl }) => {
	return (
		<div className="category mt-4 px-3">
			<button
				className="categoryBtn"
				onClick={() => {
					setUrl(`google.com/${category}`);
				}}>
				{category}
			</button>
		</div>
	);
};

export default Category;
