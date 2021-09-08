// React
import React from 'react';

// Styles
import { HomeScreenStyled } from './Styles';

// Components
import Banner from '../components/banner/Banner';
import CourseList from '../components/course-list/CourseList';

interface HomeProps {}

const HomeScreen: React.FC<HomeProps> = () => {
	return (
		<HomeScreenStyled>
			<Banner
				title="Cursos de programación online para todo el mundo"
				subtitle="Clases prácticas, concretas y enfocadas en las habilidades de mayor
					demanda laboral."
			/>

			<CourseList />
		</HomeScreenStyled>
	);
};

export default HomeScreen;
