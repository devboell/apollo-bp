import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Home from './Home'
import Gallery from './Gallery'
import PaintingViewer from './PaintingViewer'
import GridItem from './GridItem'

const ContentArea = () =>
  <GridItem>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:artistPath" component={Gallery} />
      <Route path="/:artistPath/:paintingName" component={PaintingViewer} />
    </Switch>
  </GridItem>

export default ContentArea
