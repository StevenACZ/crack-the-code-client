// Redux
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface courseSearchState {
	name: string;
	duration: number;
}

const initialState: courseSearchState = {
	name: '',
	duration: 0,
};

export const courseSearchSlice = createSlice({
	name: 'courseSearch',
	initialState,
	reducers: {
		courseSearchRequest: state => {
			state.name = '';
			state.duration = 0;
		},
		courseSearchSuccess: (state, action) => {
			console.log(action);
			state.name = action.payload;
			state.duration = 0;
		},
	},
});

export const { courseSearchRequest, courseSearchSuccess } =
	courseSearchSlice.actions;

export const selectCourseSearchName = (state: RootState) =>
	state.courseSearch.name;
export const selectCourseSearchDuration = (state: RootState) =>
	state.courseSearch.duration;

export default courseSearchSlice;
