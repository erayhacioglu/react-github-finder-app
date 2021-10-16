import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserRepo from './UserRepo';
import axios from 'axios';

const UserDetail = () => {
	const [user, setUser] = useState({});
	const {
		login,
		avatar_url,
		name,
		email,
		bio,
		blog,
		location,
		followers,
		following,
	} = user;
	const [repos, setRepos] = useState([]);
	const { username } = useParams();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (username) {
			getUserData();
			getUserRepo();
		}
	}, [username]);

	const getUserData = async () => {
		setLoading(true);
		const { data } = await axios.get(
			`https://api.github.com/users/${username}`
		);
		setUser(data);
		setLoading(false);
	};

	const getUserRepo = async () => {
		const { data } = await axios.get(
			`https://api.github.com/users/${username}/repos`
		);
		setRepos(data);
	};

	return (
		<>
			{loading && (
				<div className='d-flex justify-content-center my-5'>
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
			{user && loading === false && (
				<div className='container my-3'>
					<div className='row'>
						<div className='col-md-8 offset-md-2 p-3'>
							<div className='user d-flex align-items-center'>
								<div className='user-photo'>
									<img
										src={`${
											avatar_url
												? avatar_url
												: 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
										}`}
										alt=''
										className='user-profile-img'
									/>
								</div>
								<div className='user-detail ms-3'>
									<h3>{name && name}</h3>
									<h5>{login && login}</h5>
									<p>{bio && bio}</p>
									<span>{email && email}</span>
									<div className='d-flex align-items-center'>
										<span>
											<i className='far fa-user' />
											&nbsp; {followers && followers} followers .{' '}
											{following && following} following
										</span>
									</div>
									<a href={`${blog && blog}`} target='_blank' rel='noreferrer'>
										{blog && blog}
									</a>
									{location && (
										<span className='d-flex align-items-center'>
											<i className='fas fa-map-marker-alt' />
											&nbsp;{location}
										</span>
									)}
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className='row my-3'>
						<h3 className='mb-2'>Repositories</h3>
						{repos.length > 0 &&
							repos.map((repo, key) => <UserRepo key={key} repo={repo} />)}
					</div>
				</div>
			)}
		</>
	);
};

export default UserDetail;
