import React from 'react';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap'


const InfoWindow = (props) => {

    return (
      <Panel>
        <Panel.Heading>{props.clickedVenue.name}</Panel.Heading>
        <Panel.Body>
          <Grid>
            <Row className="show-grid">
              <Col md={2}>Address</Col>
              <Col md={10}>
                {/* Dealing with undefined address in fetched API file */}
                {(props.clickedVenue.location.address === undefined ) ? (
                  <address> Address has not been entered, please see the map below.</address>
                ) : (
                  <address>{props.clickedVenue.location.address}, {props.clickedVenue.location.city}, {props.clickedVenue.location.postalCode}</address>)
                }
              </Col>
            </Row>
            {/* Showing the url if it is given in fetched API file */}
            {props.clickedVenue.url !== undefined && (
              <Row className="show-grid">
                <Col md={2} aria-label="webUrl">Web pages</Col>
                <Col md={10}><a target='_blank' href={props.clickedVenue.url}>{props.clickedVenue.url}</a>
              </Col>
              </Row>)}
            <Row className="show-grid">
              <Col md={2} aria-label="venueType">Type of venue</Col>
              <Col md={10}>{props.clickedVenue.categories[0].pluralName}</Col>
            </Row>

            <br/>

            <Row className="show-grid">
              <Col md={12}>
                <Button onClick={props.hideInfoWindow()}>Close</Button>
              </Col>
            </Row>
          </Grid>
      </Panel.Body>
    </Panel>
    )

};

export default InfoWindow
