// React
import React from 'react';

// Styles
import { HeaderStyled } from './Styles';

// Components
import Logo from '../../logo/Logo';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<HeaderStyled>
			<Logo />
		</HeaderStyled>
	);
};

export default Header;
