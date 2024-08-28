import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { Box, Button, styled, Tab } from '@mui/material';

import WidgetsList from './WidgetsList';

const WidgetTabs = ({ onClose, handleOnChange, detail }) => {
	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};
	const handleOnClick = () => {
		onClose();
	};

	const handleCheckboxChange = (event, widgetName) => {
		handleOnChange(event, widgetName);
	};

	console.log('datils are : ' + detail);

	const tabs = ['CSPM', 'CWPP', 'Image', 'Ticket'];
	const [selectedTab, setSelectedTab] = useState(1);

	const theme = useTheme();

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
		<Box sx={{ width: '100%', typography: 'body1', backgroundColor: theme.palette.background.default }}>
			<TabContext
				value={selectedTab}
				sx={{ width: '100%', backgroundColor: theme.palette.background.default }}
			>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange}>
						{tabs.map((tab, index) => (
							<Tab
								label={tab}
								value={index + 1}
							/>
						))}
					</TabList>
				</Box>
				<div style={{ height: '72vh' }}>
					<TabPanel
						value={1}
						sx={{ backgroundColor: theme.palette.background.default }}
					>
						<WidgetsList detail={detail} />
					</TabPanel>
					<TabPanel value={2}>
						<WidgetsList detail={detail} />
					</TabPanel>
					<TabPanel value={3}>
						<WidgetsList detail={detail} />
					</TabPanel>
					<TabPanel value={4}>
						<WidgetsList detail={detail} />
					</TabPanel>
				</div>
			</TabContext>
			<div style={{ textAlign: 'right' }}>
				<CustomButton
					variant='outlined'
					sx={{ borderRadius: 2 }}
				>
					Confirm
				</CustomButton>
				<Button
					onClick={handleOnClick}
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
					cancel
				</Button>
			</div>
		</Box>
	);
};

export default WidgetTabs;
