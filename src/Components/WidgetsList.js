import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, Checkbox, Stack } from '@mui/material';

const WidgetsList = ({ detail }) => {
    const theme = useTheme();
	return (
		<Stack
			spacing={2}
			sx={{ backgroundColor: theme.palette.background.default }}
		>
			{Object.entries(detail).map(([widgetName, widgetData]) => {
				return (
					<Card
						sx={{ borderColor: theme.palette.secondary.default }}
						className='paddingminor panel'
					>
						<span>
							<Checkbox />
						</span>
						Widget234
					</Card>
				);
			})}
		</Stack>
	);
};

export default WidgetsList;
