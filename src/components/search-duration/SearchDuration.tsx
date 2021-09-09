// React
import React, { useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import { sendDuration } from '../../redux/actions/courseSearch';

// Redux - Slices
import { selectCourseListCourses } from '../../redux/slices/courseList';

// Styles
import { SearchDurationStyled } from './Styles';

interface SearchDurationProps {}

const SearchDuration: React.FC<SearchDurationProps> = () => {
	// Dispatch
	const dispatch = useDispatch();

	// Selector
	const durations = useSelector(selectCourseListCourses)?.map(
		course => course.duration
	);

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

	return (
		<SearchDurationStyled>
			<label>
				<input
					type="radio"
					value={0}
					name="duration"
					checked={selectDuration.checked === 0}
					onChange={handleChange}
				/>
				Reset
			</label>

			{uniqueDurations &&
				uniqueDurations.map(uniqueDuration => (
					<label key={uniqueDuration}>
						<input
							type="radio"
							value={parseFloat(uniqueDuration)}
							name="duration"
							checked={selectDuration.checked === parseFloat(uniqueDuration)}
							onChange={handleChange}
						/>
						{uniqueDuration}
					</label>
				))}
		</SearchDurationStyled>
	);
};

export default SearchDuration;