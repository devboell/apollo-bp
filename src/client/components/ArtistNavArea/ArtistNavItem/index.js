import React from 'react'
import PropTypes from 'prop-types'
import StyledNavLink from './StyledNavLink'

const ArtistNavItem = ({ name, path }) =>
  <li>
    <h2>
      <StyledNavLink
        to={`/${path}`}
      >
        {name}
      </StyledNavLink>
    </h2>
  </li>


ArtistNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default ArtistNavItem
