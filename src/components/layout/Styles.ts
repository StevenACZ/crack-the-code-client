import styled from 'styled-components';

export const LayoutStyled = styled.section`
	border: 1px solid black;
	min-height: 100vh;
	max-width: 1200px;
	margin: 0 auto;

	@media (max-width: 991px) {
		background-color: red;
	}

	@media (max-width: 375px) {
		background-color: blue;
	}
`;
