import styled from 'styled-components';

export const FooterStyled = styled.section`
	width: 100%;
	height: 100px;
	border-radius: 10px;
	background-color: #f6f7f9;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;

	& > a {
		color: black;
		margin-left: 5px;
	}

	@media (max-width: 1200px) {
		padding: 0 20px;
	}

	@media (max-width: 375px) {
		padding: 0 10px;
	}
`;
