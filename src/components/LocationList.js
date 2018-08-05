import React from 'react'
import sortBy from 'sort-by'

import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'

const LocationList = (props) => {

    props.venues.sort(sortBy('name'))

    return (
      <Panel>
        <Panel.Heading aria-label="listOfLocations">Venues</Panel.Heading>
        {/* Mapping through the (filtered) venues and making the list of venues */}
        <ListGroup>
          {props.venues.map(venue => {
            return <ListGroupItem
              key={venue.id}
              onClick={() => props.openInfoWindow(venue)}
              >{venue.name}</ListGroupItem>
                })}
        </ListGroup>
    </Panel>
  )
}

export default LocationList
