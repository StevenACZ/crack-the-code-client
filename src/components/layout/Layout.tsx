// React
import React from 'react';

// Styles
import { LayoutStyled } from './Styles';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutStyled>
			<>{children}</>
		</LayoutStyled>
	);
};
