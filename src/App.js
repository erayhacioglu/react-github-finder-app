import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import axios from 'axios';

const App = () => {
	const [search, setSearch] = useState('');
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSearch = async (e) => {
		e.preventDefault();
		if (search) {
			setLoading(true);
			const { data } = await axios.get(
				`https://api.github.com/search/users?q=${search}`
			);
			setUserList(data.items);
			setLoading(false);
			if (data.items.length === 0) {
				setError('No results found');
			}
		}
	};

	const clearSearch = () => {
		setSearch('');
		setUserList([]);
		setError('');
	};

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Search
						search={search}
						setSearch={setSearch}
						handleSearch={handleSearch}
						clearSearch={clearSearch}
					/>
					<UserList userList={userList} loading={loading} error={error} />
				</Route>
				<Route exact path='/user/:username'>
					<UserDetail />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
