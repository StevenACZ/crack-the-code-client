// Redux
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

// Interfaces
import { ReqResCourse } from '../../interfaces/reqResCourse.interfaces';

interface CourseListState {
	courses: null | ReqResCourse[];
	loading: boolean;
	error: null | string;
}

const initialState: CourseListState = {
	courses: null,
	loading: false,
	error: null,
};

export const courseListSlice = createSlice({
	name: 'courseList',
	initialState,
	reducers: {
		courseListRequest: state => {
			state.courses = null;
			state.loading = true;
			state.error = null;
		},
		courseListSuccess: (state, action) => {
			state.courses = action.payload;
			state.loading = false;
			state.error = null;
		},
		courseListFail: (state, action) => {
			state.courses = null;
			state.loading = false;
			state.error = action.payload;
		},
		courseListReset: state => {
			state.courses = null;
			state.loading = false;
			state.error = null;
		},
	},
});

export const {
	courseListRequest,
	courseListSuccess,
	courseListFail,
	courseListReset,
} = courseListSlice.actions;

export const selectCourseListSongs = (state: RootState) =>
	state.courseList.courses;
export const selectCourseListLoading = (state: RootState) =>
	state.courseList.loading;
export const selectCourseListError = (state: RootState) =>
	state.courseList.error;

export default courseListSlice;
