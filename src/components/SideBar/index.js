import React from 'react'
import Img from 'gatsby-image'
import Link, { navigateTo } from 'gatsby-link'
import getSlug from 'speakingurl'
import openingSoonIcon from '../../imgs/calendar-with-stats-infographic.png'

function formatSideBarData(districts, edges) {
  let sideBar = []

  if (!!districts && !!edges) {
    districts.forEach(d => {
      edges.forEach(e => {
        if (e.node.district === d) {
          sideBar.push({ district: d, city: e.node.city })
        }
      })
    })

    if (sideBar.length !== 0) {
      let counts = []

      sideBar.forEach(s => {
        const idx = s.district
        const n = counts[idx] ? counts[idx]['n'] + 1 : 1
        counts[idx] = {
          n: n,
          city: s.city,
          district: s.district,
        }
      })

      sideBar = counts
    }
  }

  return sideBar
}

const createDistrictName = districtName => {
  if (isNaN(districtName)) return districtName
  else return `Quận ${districtName}`
}

const SideBar = ({ data }) => {
  const counts = formatSideBarData(data.distinct, data.edges)
  const getSlugOptions = {
    lang: 'vn',
  }

  return (
    <div>
      <div className="docs-brand">
        <a className="docs-logo">
          <img
            src="http://lex.com.my/public/images/LEL-logo.png"
            alt=""
            style={{ width: '75%' }}
          />
        </a>
      </div>
      <div className="docs-nav">
        <div className="accordion-container">
          <div className="accordion">
            <input hidden={true} />
            <label
              onClick={() => {
                navigateTo('/')
              }}
              className="accordion-header c-hand larger"
            >
              Thông Tin Chung
            </label>
          </div>
          <div className="accordion">
            <input
              type="checkbox"
              id="ho-chi-minh"
              name="docs-accordion-checkbox"
              hidden={true}
            />
            <label className="accordion-header c-hand" htmlFor="ho-chi-minh">
              Hồ Chí Minh
            </label>
            <div className="accordion-body">
              <ul className="menu menu-nav">
                {Object.keys(counts).map(c => {
                  const item = counts[c]
                  if (item.city === 'Hochiminh City') {
                    return (
                      <li
                        key={`${item.city}-${item.district}`}
                        className="menu-item"
                      >
                        <Link
                          to={`/ho-chi-minh/${getSlug(
                            c,
                            getSlugOptions
                          )}/#close`}
                        >
                          {createDistrictName(c)}
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
          <div className="accordion">
            <input
              type="checkbox"
              id="ha-noi"
              name="docs-accordion-checkbox"
              hidden={true}
            />
            <label className="accordion-header c-hand" htmlFor="ha-noi">
              Hà Nội
            </label>
            <div className="accordion-body">
              <ul className="menu menu-nav">
                {Object.keys(counts).map(c => {
                  if (counts[c].city === 'Hanoi City') {
                    return (
                      <li
                        key={`${counts[c].city}-${counts[c].district}`}
                        className="menu-item"
                      >
                        <Link
                          to={`/ha-noi/${getSlug(c, getSlugOptions)}/#close`}
                        >
                          {createDistrictName(c)}
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
          <div className="divider" />
          <div className="accordion">
            <input
              type="checkbox"
              id="cua-hang-sap-mo"
              name="docs-accordion-checkbox"
              hidden={true}
            />
            <label
              className="accordion-header c-hand"
              htmlFor="cua-hang-sap-mo"
            >
              Cửa hàng sắp mở
            </label>
            <div className="accordion-body">
              <ul className="menu menu-nav">
                <li key={`cua-hang-sap-mo-ho-chi-minh`} className="menu-item">
                  <Link to={`/cua-hang-sap-mo/ho-chi-minh`}>Hồ Chí Minh</Link>
                </li>
                <li key={`cua-hang-sap-mo-ha-noi`} className="menu-item">
                  <Link to={`/cua-hang-sap-mo/ha-noi`}>Hà Nội</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
