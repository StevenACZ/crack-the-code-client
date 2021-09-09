// React
import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { sendName } from '../../redux/actions/courseSearch';

// Styles
import { SearchBoxStyled } from './Styles';

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
	// Dispatch
	const dispatch = useDispatch();

	const [name, setName] = useState('');

	const handleName = (e: any) => {
		setName(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		dispatch(sendName(name));

		setName('');
	};

	return (
		<SearchBoxStyled>
			<form>
				<input
					type="text"
					value={name}
					onChange={handleName}
					name="name"
					placeholder="Buscar curso"
				/>
				<button onClick={handleSubmit} type="submit">
					Buscar
				</button>
			</form>
		</SearchBoxStyled>
	);
};

export default SearchBox;
