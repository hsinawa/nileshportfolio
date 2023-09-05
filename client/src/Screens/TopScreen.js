import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


//Static Files
import textData from '../Static/textFiles.json'

const TopScreen = () => {
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <p> {textData.TopScreen.name} </p>
        </Grid>
        <Grid item xs={12} md={6}>
        <p>Hi</p>
        </Grid>
       
      </Grid>
    </Box>
        </div>
    )
}

export default TopScreen