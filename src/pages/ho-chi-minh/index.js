import React from 'react'
import Link from 'gatsby-link'
import getSlug from 'speakingurl'

const createDistrictName = districtName => {
  if (isNaN(districtName)) return districtName
  else return `Quận ${districtName}`
}

const SaiGon = ({ data }) => {
  const locations = data.allLocationsXlsxSheet1
  const getSlugOptions = {
    lang: 'vn',
  }

  return (
    <div className="container">
      <h3 className="s-title">Hồ Chí Minh</h3>
      <div className="docs-note">
        <p>
          {`Danh sách các quận đã có cửa hàng ở Sài Gòn với tổng số cửa hàng là ${
            locations.totalCount
          }`}
        </p>
        <ul>
          {locations.distinct.sort().map(item => (
            <li key={item}>
              <Link to={`/ho-chi-minh/${getSlug(item, getSlugOptions)}`}>
                {createDistrictName(item)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SaiGon

export const SaiGonQuery = graphql`
  query SaiGonQuery {
    allLocationsXlsxSheet1(filter: { city: { eq: "Hochiminh City" } }) {
      totalCount
      distinct(field: district)
    }
  }
`
