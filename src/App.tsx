// React
import React from 'react';

// Styles
import GlobalStyle from './theme/globalStyle';

// Components
import { Layout } from './components/layout/Layout';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<h1>Hello World! 🚚</h1>
			</Layout>
		</>
	);
};

export default App;
