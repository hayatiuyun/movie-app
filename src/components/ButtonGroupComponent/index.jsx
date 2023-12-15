'use client';
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

const StyledButtonGroup = styled(ButtonGroup)`
  && {
    gap: 2;
  }
`;

const StyledButton = styled(Button)(({ theme, active }) => ({
  backgroundColor: active ? 'primary.main' : 'black',
  color: '#ffffff',
  border: '12px !important',
  borderColor: '#E50914 !important',
  margin: 4,
  borderRadius: '16px !important',
  '&:hover': {
    backgroundColor: active ? 'primary.dark' : 'black',
  },
}));

const MovieButtonGroup = ({ categories = [], onChangeTab, sx }) => {
  const [activeValue, setActiveValue] = useState("now_playing");

  const handleButtonClick = (value) => {
    setActiveValue(value);
    onChangeTab(value)
  };

  return (
    <StyledButtonGroup
      sx={{
        gap: 2,
        ...sx
      }}
      variant='contained'
      aria-label='movie category buttons'
      defaultValue="now_playing"
    >
      {categories.map(({label, value}) => (
        <StyledButton
          key={value}
          value={value}
          onClick={() => handleButtonClick(value)}
          active={activeValue === value}
        >
          {label}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  );
};

export default MovieButtonGroup;
