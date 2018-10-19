import React from 'react'

import HomeIconArea from 'components/HomeIconArea'
import HeaderArea from 'components/HeaderArea'
import ArtistNavArea from 'components/ArtistNavArea'
import ContentArea from 'components/ContentArea'

import LayoutGrid from './LayoutGrid'

const App = () => (
  <LayoutGrid>
    <HomeIconArea />
    <HeaderArea />
    <ArtistNavArea />
    <ContentArea />
  </LayoutGrid>
)


export default App
