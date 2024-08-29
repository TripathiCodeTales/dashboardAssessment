import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { Box, Button, styled, Tab } from '@mui/material';

import WidgetsList from './WidgetsList';
import AppContext from '../Context/AppContext';

const WidgetTabs = ({ onClose }) => {
	const [selectedTab, setSelectedTab] = useState();
	const { tempUpdatedCategory, selectedCategoryIndex, setSelectedCategoryIndex, handleUpdateWidgets } =
		useContext(AppContext);
	const theme = useTheme();

	useEffect(() => {
		setSelectedTab(selectedCategoryIndex + 1);
	}, [selectedCategoryIndex]);

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
		setSelectedCategoryIndex(newValue - 1);
	};
	const handleOnClick = () => {
		onClose();
	};

	const handleSubmit = () => {
		handleUpdateWidgets();
		onClose();
	};

	const CustomButton = styled(Button)({
		borderColor: theme.palette.background.secondary,
		'&:hover': {
			borderColor: theme.palette.background.secondary,
			backgroundColor: theme.palette.background.secondary,
			color: 'white',
		},
		backgroundColor: 'white',
		borderStyle: 'solid',
		marginRight: '3%',
	});

	return (
		<Box sx={{ width: '100%', height: '100%', typography: 'body1', backgroundColor: theme.palette.background.default }}>
			<TabContext
				value={selectedTab}
				sx={{ width: '100%', height: '100%', backgroundColor: theme.palette.background.default }}
			>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange}>
						{tempUpdatedCategory.map((category, index) => (
							<Tab
								label={category.abbr}
								value={index + 1}
							/>
						))}
					</TabList>
				</Box>
				<div style={{ height: '75%' }}>
					{tempUpdatedCategory.map((Category, index) => {
						return (
							<TabPanel value={index + 1}>
								<WidgetsList widgets={Category.widgets} />
							</TabPanel>
						);
					})}
				</div>
			</TabContext>
			<div style={{ textAlign: 'right', paddingRight: '2rem' }}>
				<CustomButton
					variant='outlined'
					sx={{ borderRadius: 2 }}
					onClick={handleOnClick}
				>
					Cancel
				</CustomButton>
				<Button
					onClick={handleSubmit}
					variant='contained'
					sx={{
						borderRadius: 2,
						backgroundColor: theme.palette.background.secondary,
						'&:hover': {
							backgroundColor: theme.palette.background.default,
							color: theme.palette.primary.main,
							borderColor: theme.palette.background.secondary,
							borderStyle: 'solid',
							transition: 'border-color 0.3s ease',
						},
					}}
				>
					Confirm
				</Button>
			</div>
		</Box>
	);
};

export default WidgetTabs;
