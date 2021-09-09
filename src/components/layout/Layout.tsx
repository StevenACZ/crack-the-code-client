// React
import React from 'react';

// Styles
import { LayoutStyled } from './Styles';

// Components
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutStyled>
			<Header />
			<>{children}</>
			<Footer />
		</LayoutStyled>
	);
};

export default Layout;
