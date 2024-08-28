import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

import PieCharts from '../Components/PieCharts.js';
import NoContent from '../Components/NoContent.js';

const WidgetCard = ({ data, Header, noContent }) => {
	const theme = useTheme();
	const finalData = data?.filter((dat) => dat.isChecked == 'true');
	return (
		<Card
			variant='outlined'
			sx={{
				m: 1,
				flex: 1,
				minWidth: 0,
				borderRadius: 3,
				backgroundColor: theme.palette.background.default,

			}}
		>
			<CardContent className='small-head'>
				{Header}
				<Typography
					variant='h6'
					component='div'
				>
					{data ? <PieCharts data={finalData} /> : <NoContent noContent={noContent} />}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default WidgetCard;
