import { Button } from "react-bootstrap";
const Search = ({ handleSubmit, query, getQuery }) => {
	return (
		<div className="searchBar d-flex justify-content-end mt-3">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="search"
					value={query}
					onChange={getQuery}
				/>
				<Button
					variant="outline-primary"
					size="sm"
					className="mx-3"
					onClick={handleSubmit}>
					Search
				</Button>
			</form>
		</div>
	);
};

export default Search;
