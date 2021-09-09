import styled from 'styled-components';

export const SearchDurationStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > label {
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

		& > label {
			margin-bottom: 10px;
		}
	}

	@media (max-width: 375px) {
	}
`;
