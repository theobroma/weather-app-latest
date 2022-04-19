import { Box, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { forecastSelector } from '../../@store/forecast/selectors';
import GridProgress from '../UI/GridProgress';
import Location from './Location';

const CurrentWeather = () => {
  const { location, currentWeather, isFetching } =
    useSelector(forecastSelector);

  return (
    <Box p={3}>
      <GridProgress container spacing={1} loading={isFetching}>
        <Grid item xs={12}>
          {location.name && <Location location={location} />}
          {/* <CurrentWeatherData currentWeather={currentWeather} /> */}
        </Grid>
      </GridProgress>
    </Box>
  );
};

export default CurrentWeather;
