const Search = ({ search, setSearch, handleSearch, clearSearch }) => {
	return (
		<div className='container my-5'>
			<div className='row'>
				<form className='col-md-6 offset-md-3'>
					<div className='input-group position-relative'>
						<input
							type='text'
							className='form-control'
							placeholder='enter the name'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						{search && (
							<i
								className='fas fa-times text-danger fs-4 position-absolute'
								style={{
									zIndex: '10',
									right: '50px',
									top: '7px',
									cursor: 'pointer',
								}}
								onClick={clearSearch}
							/>
						)}
						<div className='input-group-append'>
							<button
								type='submit'
								className='btn btn-primary'
								onClick={handleSearch}
							>
								<i className='fas fa-search' />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Search;
