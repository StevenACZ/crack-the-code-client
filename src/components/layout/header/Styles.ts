import styled from 'styled-components';

export const HeaderStyled = styled.header`
	height: 100px;
	padding: 30px 0px;
	display: flex;
	justify-content: space-between;
	align-content: center;

	@media (max-width: 1200px) {
		padding: 30px 40px;
	}

	@media (max-width: 375px) {
		padding: 30px 20px;
	}
`;
