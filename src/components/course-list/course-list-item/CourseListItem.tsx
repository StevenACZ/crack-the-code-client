// React
import React from 'react';

// Moment
import moment from 'moment';
import 'moment/locale/es';

// Interfaces
import { ReqResCourse } from '../../../interfaces/reqResCourse.interfaces';

// Styles
import {
	CourseListItemStyled,
	Header,
	Body,
	BodyTop,
	BodyBottom,
	Free,
	Price,
} from './Styles';

// Components
import CoursePrice from './course-price/CoursePrice';

const CourseListItem: React.FC<ReqResCourse> = ({
	name,
	age_range,
	amount_usd,
	amount_pen,
	has_discount,
	discount_percentage,
	amount_after_discount_usd,
	amount_after_discount_pen,
	thumbnail,
	next_start_date,
	duration,
}) => {
	console.log(thumbnail?.replace('statics', 'statics-prod'));

	return (
		<CourseListItemStyled>
			<Header>
				{thumbnail && (
					<img src={thumbnail?.replace('statics', 'statics-prod')!} alt="asd" />
				)}
			</Header>

			<Body>
				<BodyTop>
					<h2>{name}</h2>

					<p>
						Edad:{' '}
						{age_range
							.replaceAll('_', ' ')
							.replace('to', 'a')
							.replace(' plus', '+')}{' '}
						años
					</p>
				</BodyTop>

				<BodyBottom>
					{/* isFree? */}
					{parseInt(amount_pen) === 0 && parseInt(amount_usd) === 0 ? (
						<Free>GRATIS</Free>
					) : (
						<>
							{!has_discount && (
								<Price>
									{!(parseInt(amount_usd) === 0) && (
										<CoursePrice
											price={parseInt(amount_usd)}
											badge="usd"
											size="1"
										/>
									)}
									{!(parseInt(amount_pen) === 0) && (
										<CoursePrice
											price={parseInt(amount_pen)}
											badge="pen"
											size="1"
										/>
									)}
								</Price>
							)}
						</>
					)}

					{/* hasDiscount? */}
					{has_discount && (
						<>
							<p>DESCUENTO DEL {parseInt(discount_percentage)}%</p>
							<Price>
								{!(parseInt(amount_after_discount_usd) === 0) && (
									<CoursePrice
										price={parseInt(amount_after_discount_usd)}
										discount_price={parseInt(amount_usd)}
										badge="usd"
										size="1"
									/>
								)}
								{!(parseInt(amount_after_discount_pen) === 0) && (
									<CoursePrice
										price={parseInt(amount_after_discount_pen)}
										discount_price={parseInt(amount_pen)}
										badge="pen"
										size="1"
									/>
								)}
							</Price>
						</>
					)}

					{/* nextStartDate? */}
					{next_start_date && (
						<p>
							Fecha de inicio:{' '}
							{moment(next_start_date).locale('es').format(`D [de] MMMM`)}
						</p>
					)}

					<p>Duración: {parseFloat(duration)} meses</p>
				</BodyBottom>
			</Body>
		</CourseListItemStyled>
	);
};

export default CourseListItem;
