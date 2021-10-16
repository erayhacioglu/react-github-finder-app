import { Link } from 'react-router-dom';

const User = ({ item }) => {
	const { login, avatar_url } = item;

	return (
		<div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
			<div className='card'>
				<img
					src={`${
						avatar_url
							? avatar_url
							: 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
					}`}
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{login}</h5>
					<Link to={`/user/${login}`} className='btn btn-primary'>
						User Detail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default User;
