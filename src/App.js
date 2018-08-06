import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

import { Alert, Grid, Row, Col, PageHeader, FormControl } from 'react-bootstrap';
import './App.css';

import LocationList from './components/LocationList.js'
import Map from './components/Map.js';
import InfoWindow from './components/InfoWindow.js'
import Footer from './components/Footer.js'
import ErrorBoundary from './components/ErrorBoundary.js'

class App extends Component {

  state = {
    venues: [],
    isLoaded: true,
    infoWindow: false,
    clickedVenue: {},
    query: ''
  }

  /* Fetching the FourSquare API and data, filling the venues array with those data, handling error with the problem with API, done as shown in React Documentation */
  componentDidMount() {
    fetch("https://api.foursquare.com/v2/venues/search?ll=50.029755,%2014.601348&query=cafe+restaurant&radius=2000&oauth_token=PNNZ4OR1BFQSBGIYY1VTTJOKESAMCPX1QB3O1OUY4RGEOIQC&v=20180803")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            venues: result.response.venues
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  openInfoWindow = (venue) => {
    this.state.venues.forEach((venue) => venue.animation = 0 )
    venue.animation = 1 /* 0 - no animation, 1 - bounce, 2 - drop; https://developers.google.com/maps/documentation/javascript/reference/3.exp/marker#Animation */
    this.setState({ infoWindow: true, clickedVenue: venue })
  }

  hideInfoWindow = () => {
    this.state.venues.forEach((venue) => venue.animation = 0 )
    this.setState({ infoWindow: false, clickedVenue: {} })
  }

  /* getting the query */
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  /* Filtering showing venues by query typed by user, rendering both on LocationList and Map */
  filterVenues = () => {
    let filteredVenues
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      return this.state.venues.filter((venue) => match.test(venue.name))
    } else {
      return this.state.venues
    }
    return filteredVenues
  }

  render() {
    const { query, clickedVenue, isLoaded } = this.state
    const filteredVenues = this.filterVenues()

    return (

      <div className="App">
        <header className="App-header">
          <PageHeader>
            My Neighborhood Map
          </PageHeader>
        </header>

        {/* If there was problem with FourSquare Data, show the alert */}
        {isLoaded === false && (
          <Alert bsStyle="danger">
            <p>Data from FourSquare was not loaded. Please try again later.</p>
          </Alert>
        )}

        <Grid fluid>
         <Row className="show-grid">
           <Col sm={12}>
            <FormControl
              aria-label="search"
              role="search"
              type="text"
              placeholder="Search by venue name"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
            </Col>
          </Row>

          <br/>

          <Grid fluid>
            <Row className="show-grid">
              <Col sm={6}>
                <LocationList
                  venues={filteredVenues}
                  openInfoWindow={(venue) => {this.openInfoWindow(venue)}}
                  />
              </Col>
              <Col sm={6}>
                {this.state.infoWindow === true &&
                  (<InfoWindow
                    hideInfoWindow={() => this.hideInfoWindow}
                    clickedVenue={clickedVenue}
                    />)}
              </Col>
            </Row>
          </Grid>

          <Row className="show-grid">
            <Col sm={12}>
              <ErrorBoundary>
                <Map
                  venues={filteredVenues}
                  openInfoWindow={(venue) => this.openInfoWindow(venue)}
                  />
              </ErrorBoundary>
            </Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App
