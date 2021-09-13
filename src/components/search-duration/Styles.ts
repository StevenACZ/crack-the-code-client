import styled from 'styled-components';

export const SearchDurationStyled = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	& > button {
		height: 35px;
		padding: 0 25px;
		border-radius: 8px;
		border: none;
		background-color: black;
		color: white;
		outline: none;
		cursor: pointer;
		margin-right: 10px;
	}

	& > label {
		cursor: pointer;

		& > span {
			margin-left: 3px;
		}
	}

	& > label:not(:last-child) {
		margin-right: 10px;
	}

	@media (max-width: 1200px) {
		width: 100%;
		justify-content: center;
		margin-top: 20px;

		& > button {
			margin-bottom: 10px;
		}

		& > label {
			margin-bottom: 10px;
		}
	}

	@media (max-width: 375px) {
	}
`;
