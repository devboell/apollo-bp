import React from 'react'
import { Route } from 'react-router-dom'

import Gallery from 'containers/Gallery'

import Home from './Home'
import PaintingViewer from './PaintingViewer'
import GridItem from './GridItem'

const ContentArea = () =>
  <GridItem>
    <Route exact path="/" component={Home} />
    <Route exact path="/:artistPath" component={Gallery} />
    <Route path="/:artistPath/:paintingName" component={PaintingViewer} />
  </GridItem>

export default ContentArea
