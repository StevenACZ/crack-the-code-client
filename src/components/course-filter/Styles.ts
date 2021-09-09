import styled from 'styled-components';

export const CourseFilterStyled = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;

	@media (max-width: 1200px) {
		padding: 0 20px;
	}

	@media (max-width: 375px) {
		padding: 0 10px;
		display: block;
	}
`;
