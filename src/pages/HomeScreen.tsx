// React
import React from 'react';

// Styles
import { HomeScreenStyled } from './Styles';

interface HomeProps {}

const HomeScreen: React.FC<HomeProps> = () => {
	return <HomeScreenStyled>Home</HomeScreenStyled>;
};

export default HomeScreen;
