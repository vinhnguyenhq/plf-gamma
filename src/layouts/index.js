import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import './index.css'
import './lex.scss'

const TemplateWrapper = ({ data, children }) => {
  return (
    <div className="docs-container off-canvas off-canvas-sidebar-show">
      <Helmet
        title="Partner Location Finder"
        meta={[
          {
            name: 'description',
            content: 'Lazada Express Partner Location Finder',
          },
          { name: 'keywords', content: 'LEX' },
        ]}
      />
      <div className="docs-navbar">
        <NavBar />
      </div>
      <div id="sidebar" className="docs-sidebar off-canvas-sidebar">
        <SideBar data={data.allLocationsXlsxSheet1} />
      </div>
      <a className="off-canvas-overlay" href="#close" />
      <div className="docs-content off-canvas-content">{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const SideBarQuery = graphql`
  query MetaDataQuery {
    allLocationsXlsxSheet1(filter: { city: { regex: "/City/" } }) {
      distinct(field: district)
      edges {
        node {
          city
          district
        }
      }
    }
  }
`
