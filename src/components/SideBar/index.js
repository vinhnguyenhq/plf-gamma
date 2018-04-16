import React from 'react'
import Img from 'gatsby-image'
import Link, { navigateTo } from 'gatsby-link'
import getSlug from 'speakingurl'

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
            src="https://vignette.wikia.nocookie.net/globaltvindonesia/images/b/b6/Lazada_Logo_Icon.svg/revision/latest?cb=20141123043348"
            alt=""
            style={{ width: '32px' }}
          />
          <h2>EXPRESS</h2>
        </a>
      </div>
      <div className="docs-nav">
        <div className="accordion-container">
          <div className="accordion">
            <input hidden={true} />
            <label
              onClick={() => {
                navigateTo('/')
                window.location.reload(false)
              }}
              className="accordion-header c-hand"
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
              defaultChecked={true}
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
                          to={`/ho-chi-minh/${getSlug(c, getSlugOptions)}`}
                          onClick={() => {
                            window.location.reload(false)
                          }}
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
                        <Link to={`/ha-noi/${getSlug(c, getSlugOptions)}`}>
                          {createDistrictName(c)}
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
