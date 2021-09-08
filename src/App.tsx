// React
import React from 'react';

// Styles
import GlobalStyle from './theme/globalStyle';

// Pages
import HomeScreen from './pages/HomeScreen';

// Components
import Layout from './components/layout/Layout';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<HomeScreen />
			</Layout>
		</>
	);
};

export default App;
