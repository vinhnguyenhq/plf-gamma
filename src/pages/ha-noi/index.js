import React from 'react'
import Link from 'gatsby-link'
import getSlug from 'speakingurl'

const HaNoi = ({ data }) => {
  const locations = data.allLocationsXlsxSheet1
  const getSlugOptions = {
    lang: 'vn',
  }

  return (
    <div className="container">
      <h3 className="s-title">Hà Nội</h3>
      <div className="docs-note">
        <p>
          {`Danh sách các quận đã có cửa hàng ở Hà Nội với tổng số cửa hàng là ${
            locations.totalCount
          }`}
        </p>
        <ul>
          {locations.distinct.sort().map(item => (
            <li key={item}>
              <Link to={`/ha-noi/${getSlug(item, getSlugOptions)}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HaNoi

export const HaNoiQuery = graphql`
  query HaNoi1Query {
    allLocationsXlsxSheet1(filter: { city: { eq: "Hanoi City" } }) {
      totalCount
      distinct(field: district)
    }
  }
`
