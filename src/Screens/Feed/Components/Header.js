import { Grid, IconButton } from "@mui/material";
import React from "react";
import EggIcon from "@mui/icons-material/Egg";
import SearchBar from "./SearchBar";
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import Person2Icon from '@mui/icons-material/Person2Outlined';

const Header = () => {
  return (
    <Grid
      paddingX="30px"
      paddingY="20px"
      container
      direction="row"
      justifyContent="space-around"
      spacing={2}
    >
      <Grid fontSize="20px" fontWeight="500" display="flex" alignItems="center" item xs={2}>
        <EggIcon sx={{ color: "orange" }} /> FOODIES
      </Grid>
      <Grid display="flex" justifyContent="center" item  xs={8} >
        <SearchBar/>
      </Grid>
      <Grid justifyContent="right" display="flex" alignItems="center" item xs={2}>
    
        <IconButton>
            <NotificationsIcon style={{color:"black"}}/>
        </IconButton>
        <IconButton>
            <Person2Icon style={{color:"black"}}/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
