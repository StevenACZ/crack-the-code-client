// React
import React, { useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import { sendDuration, sendName } from '../../redux/actions/courseSearch';

// Redux - Slices
import { selectCourseListCourses } from '../../redux/slices/courseList';

// Styles
import { SearchDurationStyled } from './Styles';

interface SearchDurationProps {}

const SearchDuration: React.FC<SearchDurationProps> = () => {
	// Dispatch
	const dispatch = useDispatch();

	// Selector | Get only courses duration
	const durations = useSelector(selectCourseListCourses)?.map(
		course => course.duration
	);

	// Remove duplicate values
	let uniqueDurations: string[] = [];
	durations?.forEach(c => {
		if (!uniqueDurations.includes(c)) {
			uniqueDurations.push(c);
		}
	});

	const [selectDuration, setSelectDuration] = useState<{ checked: number }>({
		checked: 0,
	});

	const handleChange = (e: any) => {
		setSelectDuration({
			checked: parseFloat(e.target.value),
		});

		dispatch(sendDuration(parseFloat(e.target.value)));
	};

	const reset = () => {
		setSelectDuration({
			checked: 0,
		});

		dispatch(sendDuration(0));
		dispatch(sendName(''));
	};

	return (
		<SearchDurationStyled>
			<button onClick={reset}>Reset</button>

			{uniqueDurations.length > 0
				? uniqueDurations.map(uniqueDuration => (
						<label key={uniqueDuration}>
							<input
								type="radio"
								value={parseFloat(uniqueDuration)}
								name="duration"
								checked={selectDuration.checked === parseFloat(uniqueDuration)}
								onChange={handleChange}
							/>
							<span>
								{parseFloat(uniqueDuration)}{' '}
								{parseFloat(uniqueDuration) >= 1.5 ? 'Meses' : 'Mes'}
							</span>
						</label>
				  ))
				: null}
		</SearchDurationStyled>
	);
};

export default SearchDuration;
