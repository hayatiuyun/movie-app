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

const MovieButtonGroup = ({ categories = [], onChangeTab }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <StyledButtonGroup
      sx={{
        gap: 2,
      }}
      variant='contained'
      aria-label='movie category buttons'
    >
      {categories.map((category, index) => (
        <StyledButton
          key={index}
          onClick={() => handleButtonClick(index)}
          active={activeIndex === index}
        >
          {category}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  );
};

export default MovieButtonGroup;
