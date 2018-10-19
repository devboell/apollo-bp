import React from 'react'
import { NavLink } from 'react-router-dom'

import homeImage from './images/home.png'
import Image from './Image'

const HomeLink = () =>
  <NavLink to="/" >
    <Image src={homeImage} alt="Home" />
  </NavLink>

export default HomeLink
