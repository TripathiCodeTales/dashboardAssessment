import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Molecules/Dashboard';
import theme from './Theme/index';
import { ThemeProvider } from '@mui/material/styles';
import AppProvider from "./Context/AppProvider";


const App = () => {
	const handleOnChange = (event, item) => {
	};

	return (
		<AppProvider>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<div className='parent'>
						<Header className='head' />
						<Dashboard handleOnChange={handleOnChange} />
					</div>
				</div>
			</ThemeProvider>
		</AppProvider>
	);
}

export default App;
