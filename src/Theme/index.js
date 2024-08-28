import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#000000',
		},
		secondary: {
			main: '#949494',
			default: '#808080',
		},
		background: {
			default: '#ffffff',
			secondary: '#000080',
			paper: ' #e6f9ff',
		},
		text: {
			primary: '#333333',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: '2.5rem',
		},
		body1: {
			fontSize: '1rem',
		},
	},
});

export default theme;
