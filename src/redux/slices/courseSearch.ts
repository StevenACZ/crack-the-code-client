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
		courseSearchSendName: (state, action) => {
			state.name = action.payload;
		},
		courseSearchSendDuration: (state, action) => {
			state.duration = action.payload;
		},
	},
});

export const { courseSearchSendName, courseSearchSendDuration } =
	courseSearchSlice.actions;

export const selectCourseSearchName = (state: RootState) =>
	state.courseSearch.name;
export const selectCourseSearchDuration = (state: RootState) =>
	state.courseSearch.duration;

export default courseSearchSlice;
