import React from 'react'

import HomeIconArea from 'components/HomeIconArea'
import HeaderArea from 'components/HeaderArea'
import ArtistNavArea from 'components/ArtistNavArea'
import Content from 'components/Content'

import LayoutGrid from './LayoutGrid'

const App = () => (
  <LayoutGrid>
    <HomeIconArea />
    <HeaderArea />
    <ArtistNavArea />
    <Content />
  </LayoutGrid>
)

export default App
