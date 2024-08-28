import { useTheme } from '@mui/material/styles';
import { Add, Autorenew, MoreVert } from '@mui/icons-material';
import { Box, Button, MenuItem, Select, SvgIcon } from '@mui/material';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';

const TopBar = () => {
	const daysArr = [
		{ name: 'Last 2 days', value: 2 },
		{ name: 'Last 7 days', value: 7 },
		{ name: 'Last 15 days', value: 15 },
	];

	const theme = useTheme();

    const handleChange = () => {}

	return (
		<Box
			sx={{ paddingTop: 5 }}
			display='flex'
			justifyContent={'space-between'}
		>
			<div className='small-head'>CNAPP dashboard</div>
			<div className='sideHeader'>
				<div className='sideHeader-item'>
					<Button
						variant='outlined'
						endIcon={<Add />}
						sx={{ backgroundColor: theme.palette.background.default }}
					>
						Add widget
					</Button>
				</div>
				<div className='sideHeader-item'>
					<Button
						variant='outlined'
						sx={{ backgroundColor: theme.palette.background.default }}
					>
						<Autorenew />
					</Button>
				</div>
				<div className='sideHeader-item'>
					<Button
						variant='outlined'
						sx={{ backgroundColor: theme.palette.background.default }}
					>
						<MoreVert />
					</Button>
				</div>
				<div className='sideHeader-item'>
					<SvgIcon sx={{ backgroundColor: theme.palette.background.default }}>
						<AccessTimeFilledOutlinedIcon />
					</SvgIcon>
				</div>
				<div className='sideHeader-item'>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						defaultValue={2}
						variant='outlined'
						sx={{ backgroundColor: theme.palette.background.default }}
						onChange={handleChange}
					>
						{daysArr.map((day) => {
							return <MenuItem value={day.value}>{day.name}</MenuItem>;
						})}
					</Select>
				</div>
			</div>
		</Box>
	);
};

export default TopBar;
