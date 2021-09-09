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

	useEffect(() => {
		dispatch(
			listCourses({
				name: '',
				duration: 0,
			})
		);
	}, [dispatch]);

	return (
		<>
			{courses && (
				<CourseListStyled>
					{courses &&
						courses.map((course: ReqResCourse) => (
							<CourseListItem key={course.slug} {...course} />
						))}
				</CourseListStyled>
			)}
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
		</>
	);
};

export default CourseList;
