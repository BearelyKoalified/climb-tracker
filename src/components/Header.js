import { string } from 'prop-types'
import React from 'react'
import { ReactPropTypes } from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

Header.ReactPropTypes = {
  headerName : string,
}

export default Header