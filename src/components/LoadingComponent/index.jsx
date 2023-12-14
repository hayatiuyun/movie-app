import { CircularProgress } from '@mui/material';
import React from 'react';

const Loading = ({ dataTestId="" }) => {
  return (
    <div
      data-testid={dataTestId}
      className='mt-4 flex w-full items-center justify-center'
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
