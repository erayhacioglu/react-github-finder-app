const UserRepo = ({ repo }) => {
	const { name, html_url, description, language, watchers } = repo;
	return (
		<div className='col-md-6 col-sm-12 mb-3'>
			<div className='card'>
				<div className='card-header d-flex align-items-center justify-content-between pe-2'>
					<h5 className='card-title'>
						<i className='fas fa-book' />
						&nbsp;
						{name && name}
					</h5>
					<span className='badge bg-secondary'>Public</span>
				</div>
				<div className='card-body'>
					<p className='card-text'>
						{description && description.substr(0, 125)}...
					</p>
					<div>
						{language && <span className='badge bg-danger'>{language}</span>}
						&nbsp;
						{watchers !== 0 && <i className='far fa-star'>&nbsp;{watchers}</i>}
					</div>
					<a
						href={html_url && html_url}
						className='btn btn-primary mt-2'
						target='_blank'
						rel='noreferrer'
					>
						Go Repo
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserRepo;
