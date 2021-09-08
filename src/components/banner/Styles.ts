import styled from 'styled-components';

export const BannerStyled = styled.section`
	width: 100%;
	height: 300px;
	border-radius: 10px;
	background-color: #f6f7f9;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	text-align: center;
	width: 50%;

	& > h2 {
		font-size: 40px;
		line-height: 50px;
		font-weight: 800;
	}

	& > p {
		font-size: 20px;
		line-height: 26px;
		margin-top: 20px;
	}

	@media (max-width: 1200px) {
		width: 50%;
	}

	@media (max-width: 725px) {
		width: 90%;
	}

	@media (max-width: 375px) {
		text-align: left;
		width: 90%;

		& > h2 {
			font-size: 30px;
			line-height: 40px;
		}

		& > p {
			font-size: 16px;
			line-height: 22px;
		}
	}
`;
