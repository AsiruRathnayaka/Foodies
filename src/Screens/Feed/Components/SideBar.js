import { useState } from 'react'; // Import useState hook
import Button from '@mui/material/Button';
import { Grid, Icon, Typography } from '@mui/material';

const SideBar = ({ icon: IconComponent, label }) => {
  const [isActive, setIsActive] = useState(false); // Initialize isActive state to false

  return (
    <Grid>
      <Button
        startIcon={<Icon component ={IconComponent} sx={{ color: isActive ? 'hsl(35, 100%, 60%)' : 'black' }} />}
        sx={{
          background:'white',
          justifyContent:'left',
          width: '100%',
          height: '40px',
          borderLeft: '4px solid orange', // Add a border to the left side
          paddingLeft: '20px',
          marginBottom:'5px',
          borderRadius:'0', // Add some padding to the left side of the text
          transition: 'border-color 0.2s ease-in-out', // Add transition to border color
          borderColor: isActive ? 'hsl(35, 100%, 40%)' : 'transparent', // Set border color based on isActive state
         
          ':active': {
            borderColor: 'hsl(35, 100%, 80%)', // Set active border color to a darker matching HSL color of orange
            backgroundColor: 'transparent' // Set background color to transparent when button is active
          },
          ...(isActive && { // Add active styles if isActive state is true
            borderRadius:'0px 8px 8px 0px',
            borderColor: 'hsl(35, 100%, 95%)',
            backgroundColor: 'hsl(35, 100%, 95%)'
          }),
          ':hover': {
            borderColor: 'hsl(35, 100%, 60%)' // Set hover border color to matching HSL color of orange
          }
        }}
        // Add :hover and :active styles

        // Add onClick event handler to update isActive state
        onClick={() => setIsActive(!isActive)}
      >
        <Typography color='black' fontFamily='Quicksand' fontSize='14px' fontWeight='600' paddingLeft='20px' >
        {label}
        </Typography>
       
      </Button>
    </Grid>
  );
};

export default SideBar;
