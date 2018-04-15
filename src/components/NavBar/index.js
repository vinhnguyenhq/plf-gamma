import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => (
  <div>
    <a className="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
      <i className="icon icon-menu" />
    </a>
    <Link className="btn btn-primary" to="/">
      Trang Chủ
    </Link>
  </div>
)

export default NavBar
