import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { KeyboardArrowDownRounded } from '@mui/icons-material';

const FooterSectionTitle = ({ title, onClick = () => {} }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        mb: 2,
        cursor: {xs: "pointer", lg: "inherit"},
        width: {
          xs: "100%", 
        }
      }}
    >
      <Typography
        component='p'
        variant='subtitle1'
        sx={{ color: 'text.primary', fontWeight: '600' }}
      >
        {title}
      </Typography>
      <Box sx={{display: {lg: "none", xs:"block"}}}>
        <KeyboardArrowDownRounded className='text-tertiary-500' />
      </Box>
    </Box>
  );
};

export default FooterSectionTitle;
