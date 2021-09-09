// React
import React from 'react';

// Moment
import moment from 'moment';
import 'moment/locale/es';

// Styles
import { CourseListItemStyled } from './Styles';

// Interfaces
import { ReqResCourse } from '../../../interfaces/reqResCourse.interfaces';

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
	return (
		<CourseListItemStyled>
			<h2>{name}</h2>

			{/* isFree? */}
			{parseInt(amount_pen) === 0 && parseInt(amount_usd) === 0 ? (
				<p>GRATIS</p>
			) : (
				<>
					{!(parseInt(amount_usd) === 0) && <p>Precio ${amount_usd}</p>}
					{!(parseInt(amount_pen) === 0) && <p>Precio S/{amount_pen}</p>}
				</>
			)}

			{/* hasDiscount? */}
			{has_discount && (
				<div>
					<br />
					<p>DESCUENTO DEL {parseInt(discount_percentage)}%</p>
					{!(parseInt(amount_after_discount_usd) === 0) && (
						<p>Nuevo precio ${amount_after_discount_usd}</p>
					)}
					{!(parseInt(amount_after_discount_pen) === 0) && (
						<p>Nuevo precio S/{amount_after_discount_pen}</p>
					)}
				</div>
			)}

			{/* nextStartDate? */}
			{next_start_date && (
				<p>
					Fecha de inicio:{' '}
					{moment(next_start_date).locale('es').format(`D [de] MMMM`)}
				</p>
			)}

			{/* {thumbnail && <img src={thumbnail!} alt="asd" />} */}
			<p>Duración: {parseInt(duration)} meses</p>
			<p>
				Edad:{' '}
				{age_range
					.replaceAll('_', ' ')
					.replace('to', 'a')
					.replace(' plus', '+')}{' '}
				años
			</p>
			<br />
			<hr />
			<br />
		</CourseListItemStyled>
	);
};

export default CourseListItem;
