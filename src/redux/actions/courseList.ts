// Axios
import axios from '../../axios/index';

// Interfaces
import { ReqResCourse } from '../../interfaces/reqResCourse.interfaces';

// Redux - Slices
import {
	courseListRequest,
	courseListSuccess,
	courseListFail,
} from '../slices/courseList';

interface ListCoursesProps {
	name?: string;
	duration?: number;
}

export const listCourses =
	({ name, duration }: ListCoursesProps) =>
	async (dispatch: any) => {
		try {
			dispatch(courseListRequest());

			const { data } = await axios.get<ReqResCourse[]>(`/courses`);

			if (name || duration) {
				let filteredCourses: ReqResCourse[] = [];

				if (name && duration) {
					filteredCourses = data.filter(
						course =>
							course.name
								.toLocaleLowerCase()
								.includes(name.toLocaleLowerCase()) &&
							parseFloat(course.duration) === duration
					);
				} else {
					if (name) {
						filteredCourses = data.filter(course =>
							course.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
						);
					}

					if (duration) {
						filteredCourses = data.filter(
							course => parseFloat(course.duration) === duration
						);
					}
				}

				dispatch(courseListSuccess(filteredCourses));
			} else {
				dispatch(courseListSuccess(data));
			}
		} catch (error: any) {
			dispatch(courseListFail('Error: No data'));
		}
	};
