// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import courseListSlice from '../slices/courseList';

const store = configureStore({
	reducer: {
		courseList: courseListSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
