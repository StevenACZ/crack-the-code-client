// React
import React from 'react';

// Styles
import { BannerStyled, Content } from './Styles';

interface BannerProps {
	title: string;
	subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
	return (
		<BannerStyled>
			<Content>
				<h2>{title}</h2>
				{subtitle ? <p>{subtitle}</p> : null}
			</Content>
		</BannerStyled>
	);
};

export default Banner;
