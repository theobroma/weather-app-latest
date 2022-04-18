import React from 'react';

type Props = {
  location: {
    name: string;
    region: string;
    country: string;
  };
};

const Location = (props: Props) => {
  const { location } = props;
  return (
    <div>
      {location.name}, {location.region}, {location.country}
    </div>
  );
};

export default Location;
