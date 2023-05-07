# Weather App

[![Netlify Status](https://api.netlify.com/api/v1/badges/60489cf1-a118-47ff-bcae-6b6b2b957f2a/deploy-status)](https://app.netlify.com/sites/the-awesome-theobroma-site/deploys)
![GitHub top language](https://img.shields.io/github/languages/top/theobroma/weather-app-latest)

##### React & Material UI app utilizing the Weatherapi API

It is designed display your current and 3 day forecast weather.
It uses geolocation to find your city. This still gives the user the option to search for another location.

Register your API Key at
[https://www.weatherapi.com/](https://www.weatherapi.com/)

## :fire: Built With

This project was built using these technologies.

- [React.js v18](https://reactjs.org/)
- [Material UI v5](https://mui.com/)
- [PNPM](https://pnpm.io/)

## 🛠 Quick Start

```bash
# Install dependencies
pnpm i

# Serve on localhost:3000
pnpm start

# Build for production
pnpm build

# Format with prettier
pnpm format

# Lint with eslint
pnpm lint
```

## :package: Deploy to Netlify

```bash
# Generate a production build and deploy it

  "scripts": {
    ...
    "predeploy": "pnpm build",
    "deploy": "netlify deploy -p"
  },
```
