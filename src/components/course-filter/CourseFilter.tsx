// React
import React from 'react';

// Styles
import { CourseFilterStyled } from './Styles';

// Components
import SearchBox from '../search-box/SearchBox';
import SearchDuration from '../search-duration/SearchDuration';

interface CourseFilterProps {}

const CourseFilter: React.FC<CourseFilterProps> = () => {
	return (
		<CourseFilterStyled>
			<SearchBox />

			<SearchDuration />
		</CourseFilterStyled>
	);
};

export default CourseFilter;
