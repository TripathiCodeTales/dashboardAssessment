import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, useTheme } from '@mui/material/styles';
import { Breadcrumbs, InputBase, Link, Stack, Typography } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Header = () => {
    const theme = useTheme();

	return (
		<div>
			<Stack
				direction='row'
				sx={{ minWidth: 0 }}
				spacing={{ xs: 10, sm: 10, md: 40 }}
				style={{ backgroundColor: theme.palette.background.default, padding: '10px' }}
			>
				<Breadcrumbs aria-label='breadcrumb'>
					<Link
						underline='hover'
						color={theme.palette.secondary.main}
					>
						home
					</Link>
					<Typography>dashboard</Typography>
				</Breadcrumbs>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search anything ...'
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
				<Stack
					direction='row'
					spacing={6}
					style={{ color: theme.palette.secondary.main }}
				>
					<svgIcon>
						<KeyboardArrowDownIcon />
					</svgIcon>
					<svgIcon>
						<NotificationsActiveIcon />
					</svgIcon>
				</Stack>
			</Stack>
		</div>
	);
};

export default Header;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '25%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.paper,

	'&:hover': {
		backgroundColor: theme.palette.background.paper,
	},
	marginRight: theme.spacing(10),
	marginLeft: 0,
	width: '30%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
	},
}));
