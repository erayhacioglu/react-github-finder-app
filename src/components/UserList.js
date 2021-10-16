import User from './User';

const UserList = ({ userList, loading, error }) => {
	return (
		<div className='container mb-3'>
			<div className='row'>
				{loading && (
					<div className='d-flex justify-content-center'>
						<div className='spinner-border text-primary' role='status'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					</div>
				)}
				{userList.length > 0
					? loading === false &&
					  userList.map((item, key) => <User item={item} key={key} />)
					: error && <div className='alert alert-danger'>{error}</div>}
			</div>
		</div>
	);
};

export default UserList;
