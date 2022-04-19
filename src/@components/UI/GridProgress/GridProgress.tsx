import { GridProps, Grid, Box, CircularProgress } from '@mui/material';
import React from 'react';

type GridProgressProps = {
  loading: boolean;
} & GridProps;

const GridProgress = ({
  loading,
  children,
  ...gridProps
}: GridProgressProps) => {
  return (
    <Grid {...gridProps}>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={200}
          width="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </Grid>
  );
};

export default GridProgress;
