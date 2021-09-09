import styled from 'styled-components';

export const SearchBoxStyled = styled.div`
	& > form {
		& > input {
			height: 35px;
			padding: 10px 15px;
			border-radius: 8px;
			border: 1px solid black;
			outline: none;
		}

		& > button {
			height: 35px;
			padding: 0 25px;
			border-radius: 8px;
			border: none;
			background-color: black;
			color: white;
			outline: none;
			cursor: pointer;
			margin-left: 5px;
		}
	}

	@media (max-width: 1200px) {
		& > form {
			display: flex;
			justify-content: center;

			& > input {
				width: 80%;
			}
		}
	}

	@media (max-width: 375px) {
	}
`;
