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
		checked: -1,
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
				<span>Reset</span>
			</label>

			{uniqueDurations.length > 0 ? (
				uniqueDurations.map(uniqueDuration => (
					<label key={uniqueDuration}>
						<input
							type="radio"
							value={parseFloat(uniqueDuration)}
							name="duration"
							checked={selectDuration.checked === parseFloat(uniqueDuration)}
							onChange={handleChange}
						/>
						<span>{uniqueDuration} Meses</span>
					</label>
				))
			) : (
				<h1>Loading...</h1>
			)}
		</SearchDurationStyled>
	);
};

export default SearchDuration;
