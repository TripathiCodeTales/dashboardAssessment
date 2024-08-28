import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Molecules/Dashboard';
import theme from './Theme/index';
import { ThemeProvider } from '@mui/material/styles';
import AppContext from './Context/AppContext';

const details = {
	CSPM: {
		widget1: [
			{ id: 0, value: 50, label: 'connected', isChecked: 'true' },
			{ id: 1, value: 50, label: 'not connected', isChecked: 'true' },
			{ id: 2, value: 10, label: 'unconnected', isChecked: 'false' },
			{ id: 3, value: 40, label: 'somewhat connected', isChecked: 'false' },
		],

		widget2: [
			{ id: 0, value: 1689, label: 'passed', isChecked: 'true' },
			{ id: 1, value: 36, label: 'Not available', isChecked: 'true' },
			{ id: 2, value: 68, label: 'warning', isChecked: 'true' },
			{ id: 3, value: 1689, label: 'failed', isChecked: 'true' },
			{ id: 4, value: 100, label: 'maybe passed', isChecked: 'false' },
			{ id: 5, value: 400, label: 'unconnected', isChecked: 'false' },
		],
		widget3: [
			{ id: 0, value: 10, label: 'unconnected' },
			{ id: 1, value: 40, label: 'somewhat connected' },
			{ id: 2, value: 50, label: 'connects' },
		],
	},
};

const categories = [
	{
		name: 'CSPM Executive Dashboard',
		widgets: [
			{
				name: 'Cloud Accounts',
				detail: [
					{
						id: 0,
						value: 50,
						label: 'connected',
						isChecked: 'true',
					},
					{
						id: 1,
						value: 50,
						label: 'not connected',
						isChecked: 'true',
					},
				],
			},
			{
				name: 'Cloud Account Risk Assessment',
				detail: [
					{
						id: 0,
						value: 1689,
						label: 'passed',
						isChecked: 'true',
					},
					{
						id: 1,
						value: 36,
						label: 'Not available',
						isChecked: 'true',
					},
					{
						id: 2,
						value: 68,
						label: 'warning',
						isChecked: 'true',
					},
					{
						id: 3,
						value: 1689,
						label: 'failed',
						isChecked: 'true',
					},
				],
			},
		],
	},
	{
		name: 'CWPP Dashboard',
		widgets: [{ name: 'Top 5 Namespace Specific Alerts' }, { name: 'Workload Headers' }],
	},
	{
		name: 'Registry Scan',
		widgets: [{ name: 'Image Risk Assessment' }, { name: 'Image Security Issue' }],
	},
];
function App() {
	const [list, setList] = useState(details);

	const handleOnChange = (event, item) => {
		const updatedList = Object.entries(details.CSPM).map(([detailKey, detailValue]) => {
			if (detailKey === item) {
				if (event.target.checked === true) {
					detailValue.isChecked = 'true';
				} else {
					detailValue.isChecked = 'false';
				}
				return detailValue;
			} else {
				return detailValue;
			}
		});
		setList(updatedList);
	};

	return (
		<AppContext.Provider value={{ categories }}>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<div className='parent'>
						<Header className='head' />
						<Dashboard
							handleOnChange={handleOnChange}
							detail={list}
						/>
					</div>
				</div>
			</ThemeProvider>
		</AppContext.Provider>
	);
}

export default App;
