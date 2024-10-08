import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AddWidgetDrawer from './AddWidgetDrawer';

const AddWidget = ({ handleOnChange }) => {
	const [drawer, setDrawer] = useState(false);
	const theme = useTheme();

	const handleOnClick = () => {
		setDrawer(true);
		handleOnChange();
	};

	const handleCloseDrawer = () => {
		setDrawer(false);
	};

	return (
		<Card
			sx={{
				backgroundColor: theme.palette.background.default,
				borderRadius: 3,
				flex: 1,
				width: '100%',
				height: 206,
			}}
		>
			<Box
				sx={{
					borderRadius: 3,
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
				}}
			>
				<CardContent>
					<Typography varient='h6'>
						<Button
							variant='outlined'
							startIcon={<AddIcon />}
							sx={{ backgroundColor: theme.palette.background.default }}
							onClick={handleOnClick}
						>
							Add widget
						</Button>
					</Typography>
				</CardContent>
			</Box>
			<AddWidgetDrawer
				isTrue={drawer}
				onClose={handleCloseDrawer}
				handleOnChange={handleOnChange}
			/>
		</Card>
	);
};

export default AddWidget;
