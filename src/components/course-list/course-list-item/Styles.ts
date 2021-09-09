import styled from 'styled-components';

export const CourseListItemStyled = styled.li`
	border-radius: 10px;
	overflow: hidden;

	@media (max-width: 1200px) {
		padding: 0 20px;
	}

	@media (max-width: 375px) {
		padding: 0 10px;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 160px;
	background-color: #e8eaf0;
	position: relative;
	cursor: pointer;

	& > img {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

export const Body = styled.div`
	width: 100%;
	display: grid;
	grid-row-gap: 12px;
	padding: 16px;
	background-color: #f6f7f9;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const BodyTop = styled.div`
	width: 100%;
	display: grid;
	grid-row-gap: 8px;

	& > h2 {
		font-size: 16px;
		font-weight: 700;
		line-height: 20px;
		color: black;
		margin: 0;
		cursor: pointer;
	}

	& > p {
		font-size: 14px;
		font-weight: 400;
		color: black;
		margin: 0;
	}
`;

export const BodyBottom = styled.div`
	display: grid;
	grid-row-gap: 12px;
`;

export const Free = styled.h4`
	font-size: 24px;
	font-weight: 800;
	line-height: 20px;
	color: red;
	margin: 0;
`;
