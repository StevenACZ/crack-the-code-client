import styled from 'styled-components';

export const CourseListStyled = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	grid-column-gap: 24px;
	grid-row-gap: 40px;

	@media (max-width: 1200px) {
	}

	@media (max-width: 375px) {
	}
`;
