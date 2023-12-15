// components/Dropdown.js
import React from 'react';
import { Button, Menu, MenuItem, ListItemText } from '@mui/material';
import { useState } from 'react';

const Dropdown = ({ categories, handleChangeValue, className, value }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [valueEl, setValueEl] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value, index) => {
    setValueEl(index);
    handleChangeValue(value);
    handleClose();
  };

  return (
    <div className={className}>
      <Button
        aria-controls='dropdown-menu'
        aria-haspopup='true'
        onClick={handleClick}
        variant='text'
        color='primary'
        style={{ textTransform: 'none' }}
      >
        {categories[valueEl].label ?? ' Select Category'}
      </Button>
      <Menu
        id='dropdown-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={className}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'black', // Set the background color to black
            },
          },
        }}
      >
        {categories.map((category, index) => (
          <MenuItem
            key={category.value}
            onClick={() => handleSelect(category.value, index)}
          >
            <ListItemText primary={category.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
