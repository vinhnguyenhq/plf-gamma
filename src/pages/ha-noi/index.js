import React from 'react'
import Link from 'gatsby-link'
import getSlug from 'speakingurl'

const HaNoi = ({ data }) => {
  const locations = data.allLocationsXlsxSheet1
  const getSlugOptions = {
    lang: 'vn',
  }

  return (
    <div>
      <p>{`Danh sách các quận đã có cửa hàng ở Hà Nội với tổng số cửa hàng là ${
        locations.totalCount
      }`}</p>
      <ul>
        {locations.distinct.map(item => (
          <li key={item}>
            <Link to={`/ha-noi/${getSlug(item, getSlugOptions)}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Trang chủ</Link>
    </div>
  )
}

export default HaNoi

export const HaNoiQuery = graphql`
  query HaNoiQuery {
    allLocationsXlsxSheet1(filter: { city: { eq: "Hanoi City" } }) {
      totalCount
      distinct(field: district)
    }
  }
`
