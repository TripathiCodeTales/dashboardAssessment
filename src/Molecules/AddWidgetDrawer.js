import React from 'react';
import { useTheme } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';

import WidgetTabs from '../Components/WidgetTabs.js';

const AddWidgetDrawer = ({ isTrue, onClose, handleOnChange }) => {
	const theme = useTheme();

	const handleOnClose = () => {
		onClose();
	};

	return (
		<div>
			<Drawer
				open={isTrue}
				onClose={handleOnChange}
				anchor='right'
			>
				<Box
					sx={{ width: '100%', height: '100%' }}
					role='presentation'
				>
					<Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, height: '100%' }}>
						<AppBar position='static'>
							<Toolbar style={{ backgroundColor: theme.palette.background.secondary, padding: 0 }}>
								<Typography
									component='div'
									sx={{ flexGrow: 1, marginLeft: 3 }}
								>
									AddWidget
								</Typography>

								<div>
									<IconButton
										size='large'
										aria-controls='menu-appbar'
										aria-haspopup='true'
										color='inherit'
										onClick={handleOnClose}
									>
										<ClearIcon />
									</IconButton>
								</div>
							</Toolbar>
						</AppBar>
						<p className='paddingminor'>Personalise the dashboard by adding the following widget</p>
						<WidgetTabs onClose={handleOnClose} />
					</Box>
				</Box>
			</Drawer>
		</div>
	);
};

export default AddWidgetDrawer;
