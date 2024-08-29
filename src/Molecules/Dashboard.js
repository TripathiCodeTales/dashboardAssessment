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
		<Box sx={{ backgroundColor: theme.palette.background.paper, padding: '2rem' }}>
			<TopBar />
			{categories.map((category, index) => {
				return (
					<>
						<p className='small-head-crd'>{category.name}</p>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								marginTop: '1rem',
								marginBottom: '3rem',
								gap: '2rem',
							}}
						>
							{category.widgets.map((widget) => {
								if (widget.isSelected) {
									return (
										<Box>
											<WidgetCard
												data={widget.detail}
												Header={widget.name}
												noContent={!widget?.detail && 'No Graph Data Available'}
											/>
										</Box>
									);
								}
							})}
							<Box sx={{ minWidth: '350px' }}>
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
