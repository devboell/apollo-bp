import React from 'react'

import ArtistNavData from 'containers/ArtistNavData'
import ArtistNavList from './ArtistNavList'

import GridItem from './GridItem'

const ArtistNavArea = () =>
  <GridItem>
    <ArtistNavData>
      <ArtistNavList />
    </ArtistNavData>
  </GridItem>

export default ArtistNavArea
