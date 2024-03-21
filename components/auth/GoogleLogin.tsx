// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from '../../public/assets/Auth-icons/google.svg';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //
const GoogleIcon = () => {
  return (
    <svg width="50" height="50" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6871 6.53113H15.083V6.5H8.33301V9.5H12.5716C11.9533 11.2464 10.2916 12.5 8.33301 12.5C5.84788 12.5 3.83301 10.4851 3.83301 8C3.83301 5.51487 5.84788 3.5 8.33301 3.5C9.48013 3.5 10.5238 3.93275 11.3184 4.63962L13.4398 2.51825C12.1003 1.26987 10.3085 0.5 8.33301 0.5C4.19113 0.5 0.833008 3.85812 0.833008 8C0.833008 12.1419 4.19113 15.5 8.33301 15.5C12.4749 15.5 15.833 12.1419 15.833 8C15.833 7.49713 15.7813 7.00625 15.6871 6.53113Z" fill="#FFC107" />
      <path d="M1.69824 4.50913L4.16237 6.31625C4.82912 4.6655 6.44387 3.5 8.33349 3.5C9.48062 3.5 10.5242 3.93275 11.3189 4.63963L13.4402 2.51825C12.1007 1.26988 10.309 0.5 8.33349 0.5C5.45274 0.5 2.95449 2.12638 1.69824 4.50913Z" fill="#FF3D00" />
      <path d="M8.33312 15.5C10.2704 15.5 12.0306 14.7586 13.3615 13.553L11.0402 11.5888C10.2872 12.1591 9.35125 12.5 8.33312 12.5C6.38237 12.5 4.726 11.2561 4.102 9.52026L1.65625 11.4046C2.8975 13.8335 5.41825 15.5 8.33312 15.5Z" fill="#4CAF50" />
      <path d="M15.6871 6.53113H15.083V6.5H8.33301V9.5H12.5716C12.2746 10.3389 11.735 11.0622 11.039 11.5891C11.0394 11.5887 11.0398 11.5887 11.0401 11.5884L13.3614 13.5526C13.1971 13.7019 15.833 11.75 15.833 8C15.833 7.49713 15.7813 7.00625 15.6871 6.53113Z" fill="#1976D2" />
    </svg>
  )
}
const GoogleLogin = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const googleHandler = async () => {
    // login || singup
  };

  return (
    <Stack
      direction="row"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
    >
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<GoogleIcon />}
        onClick={googleHandler}
      >
        {!matchDownSM}
      </Button>
    </Stack>
  );
};

export default GoogleLogin;
