# My Neighborhood Map
Final project in Udacity Front-End Nanodegree in React

## Attributions
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- Bootstrap design with [React-Bootstrap](https://react-bootstrap.github.io/).
- GoogleMaps was implemented with [React-Google-Maps](https://github.com/tomchentw/react-google-maps).
- Venues's data are fetched from [FourSquareAPI](https://developer.foursquare.com/).

## To run this app
1. Clone/download all files;
2. install all project dependencies with npm install;
3. start the development server with npm start (the app will be running at localhost:3000).

## About the app
- The app is showing the list of venues and their associated map.
- If user clicks on venue (or on the marker on the map) - additional information about the place is shown.
- User can filter venues by name in the search field.

## The Service Worker
- The Service Worker was built within the Create-React-App.
- The service worker is only enabled in the production environment:

## Steps for testing in production
1. npm run build;
2. serve -s build;
3. open App on localhost:5000.

## Error Handle with Google Maps API
- I've added the <ErrorBoundary> Component to deal with catching the GoogleMaps Errors (as the app uses the react-google-maps library).
- In the dev mode (localhost:3000) there is the window alert shown.
- In the prod mode (localhost:5000) there is another UI shown.
- (this error handling was made with ReactJS documentation https://reactjs.org/docs/error-boundaries.html.)

### App was built with:
- ReactJS,
- JavaScript ES6,
- Bootstrap.
