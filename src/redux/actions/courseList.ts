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

export const listCourses =
	({ name, duration }: { name?: string; duration?: number }) =>
	async (dispatch: any) => {
		try {
			dispatch(courseListRequest());

			const { data } = await axios.get<ReqResCourse[]>(`/courses`);

			if (name || duration) {
				let filteredCourses: ReqResCourse[] = [];

				if (name && duration) {
					filteredCourses = data.filter(
						course =>
							course.name.includes(name) &&
							parseFloat(course.duration) === duration
					);
				} else {
					if (name) {
						filteredCourses = data.filter(course => course.name.includes(name));
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
