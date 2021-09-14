// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listCourses } from '../../redux/actions/courseList';

// Redux - Slices
import {
	selectCourseListCourses,
	selectCourseListLoading,
	selectCourseListError,
} from '../../redux/slices/courseList';
import {
	selectCourseSearchDuration,
	selectCourseSearchName,
} from '../../redux/slices/courseSearch';

// Content loader
import ContentLoader from 'react-content-loader';

// Styles
import { CourseListStyled } from './Styles';

// Interfaces
import { ReqResCourse } from '../../interfaces/reqResCourse.interfaces';

// Components
import CourseListItem from './course-list-item/CourseListItem';

interface CourseListProps {}

const CourseList: React.FC<CourseListProps> = () => {
	// Dispatch
	const dispatch = useDispatch();

	// Selector
	const courses = useSelector(selectCourseListCourses);
	const loading = useSelector(selectCourseListLoading);
	const error = useSelector(selectCourseListError);

	const name = useSelector(selectCourseSearchName);
	const duration = useSelector(selectCourseSearchDuration);

	useEffect(() => {
		dispatch(
			listCourses({
				name,
				duration,
			})
		);
	}, [dispatch, name, duration]);

	return (
		<>
			{courses && (
				<CourseListStyled>
					{courses &&
						courses.map((course: ReqResCourse) => (
							<CourseListItem key={course.slug} {...course} />
						))}
					{courses.length === 0 && <span>Sin resultados...</span>}
				</CourseListStyled>
			)}
			{loading && (
				<ContentLoader
					viewBox="0 0 400 160"
					height={400}
					width={'100%'}
					backgroundColor="black"
				>
					<circle cx="150" cy="86" r="8" />
					<circle cx="194" cy="86" r="8" />
					<circle cx="238" cy="86" r="8" />
				</ContentLoader>
			)}
			{error && <span>{error}</span>}
		</>
	);
};

export default CourseList;
