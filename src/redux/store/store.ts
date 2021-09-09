// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import courseListSlice from '../slices/courseList';
import courseSearchSlice from '../slices/courseSearch';

const store = configureStore({
	reducer: {
		courseList: courseListSlice.reducer,
		courseSearch: courseSearchSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
