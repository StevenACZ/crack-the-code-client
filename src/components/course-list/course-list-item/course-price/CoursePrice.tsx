// React
import React from 'react';

// Styles
import { StyledCoursePrice, MainPrice, SecondaryPrice } from './Styles';

interface CoursePriceProps {
	price: number;
	discount_price?: number;
	size: string;
	badge: 'pen' | 'usd';
}

const CoursePrice: React.FC<CoursePriceProps> = ({
	price,
	discount_price,
	badge,
	...rest
}) => {
	return (
		<StyledCoursePrice>
			<MainPrice {...rest}>
				<p>
					{badge === 'pen' ? 'S/' : '$'}
					{price}
				</p>
			</MainPrice>

			{discount_price && (
				<SecondaryPrice {...rest}>
					{badge === 'pen' ? 'S/' : '$'}
					{discount_price}
				</SecondaryPrice>
			)}
		</StyledCoursePrice>
	);
};

export default CoursePrice;
