// Redux - Slices
import {
	courseSearchSendName,
	courseSearchSendDuration,
} from '../slices/courseSearch';

export const sendName = (name: string) => async (dispatch: any) => {
	dispatch(courseSearchSendName(name));
};

export const sendDuration = (duration: number) => async (dispatch: any) => {
	dispatch(courseSearchSendDuration(duration));
};
