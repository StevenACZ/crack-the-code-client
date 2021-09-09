// React
import React from 'react';

// Styles
import { FooterStyled } from './Styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterStyled>
			Created by{' '}
			<a href="https://github.com/StevenACZ" target="_blank" rel="noreferrer">
				@StevenACZ
			</a>
		</FooterStyled>
	);
};

export default Footer;
