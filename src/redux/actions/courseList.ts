// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
	courseListRequest,
	courseListSuccess,
	courseListFail,
} from '../slices/courseList';

export const listCourses = () => async (dispatch: any) => {
	try {
		dispatch(courseListRequest());

		const { data } = await axios.get(`/courses`);

		dispatch(courseListSuccess(data));
	} catch (error: any) {
		dispatch(courseListFail('Error: No data'));
	}
};
