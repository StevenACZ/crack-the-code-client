// React
import React from 'react';

// Styles
import { LayoutStyled } from './Styles';

// Components
import Header from './header/Header';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutStyled>
			<Header />
			<>{children}</>
		</LayoutStyled>
	);
};

export default Layout;
