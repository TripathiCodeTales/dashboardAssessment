import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AddWidget from './AddWidget.js';
import WidgetCard from '../Primitives/WidgetCard.js';
import TopBar from '../Components/TopBar.js';
import AppContext from '../Context/AppContext';

const Dashboard = () => {
	const theme = useTheme();
	const { categories, setSelectedCategoryIndex } = useContext(AppContext);

	return (
		<Box sx={{ backgroundColor: theme.palette.background.paper }}>
			<TopBar />
			{categories.map((category, index) => {
				return (
					<>
						<p className='small-head-crd'>{category.name}</p>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
								gap: 1.5,
								marginLeft: 3.5,
							}}
						>
							{category.widgets.map((widget) => {
								if (widget.isSelected) {
									return (
										<Box sx={{ width: '32%' }}>
											<WidgetCard
												data={widget.detail}
												Header={widget.name}
												noContent={!widget?.detail && 'No Graph Data Available'}
											/>
										</Box>
									);
								}
							})}
							<Box sx={{ width: '32%', height: '100px' }}>
								<AddWidget handleOnChange={() => setSelectedCategoryIndex(index)} />
							</Box>
						</Box>
					</>
				);
			})}
		</Box>
	);
};

export default Dashboard;
