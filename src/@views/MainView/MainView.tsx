// https://stackoverflow.com/questions/67909356/is-there-any-way-to-fetch-all-the-responses-stored-in-api-slice-rtk-query
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppDispatch } from '../../@store/configureStore';

const MainView = () => {
  const dispatch = useAppDispatch();

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>MainView</Box>
    </Container>
  );
};

export default MainView;
