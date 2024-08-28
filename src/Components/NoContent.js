import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Typography } from '@mui/material';

const NoContent = ({ noContent }) => {
	const theme = useTheme();
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
			<Box
				sx={{
					width: 350,
					height: 120,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 3,
				}}
			>
				<CardContent>
					<Typography>{noContent}</Typography>
				</CardContent>
			</Box>
		</Card>
	);
};
export default NoContent;
