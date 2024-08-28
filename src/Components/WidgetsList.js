import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, Checkbox, Stack } from '@mui/material';
import AppContext from '../Context/AppContext';

const WidgetsList = ({ widgets }) => {
	const theme = useTheme();
	const { updateWidget } = useContext(AppContext);

	const handleClicked = (selectedWidgetIndex) => {
		updateWidget(selectedWidgetIndex);
	};

	return (
		<Stack
			spacing={2}
			sx={{ backgroundColor: theme.palette.background.default }}
		>
			{widgets.map((widget, index) => {
				return (
					<Card
						sx={{ borderColor: theme.palette.secondary.default }}
						className='paddingminor panel'
					>
						<span>
							<Checkbox
								onChange={() => handleClicked(index)}
								checked={widget.isSelected}
							/>
						</span>
						{widget.name}
					</Card>
				);
			})}
		</Stack>
	);
};

export default WidgetsList;
