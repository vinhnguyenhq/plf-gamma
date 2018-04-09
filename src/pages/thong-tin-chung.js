import React from 'react'
import Link from 'gatsby-link'

const ThongTinChung = ({ data }) => {
  const locations = data.allLocationsXlsxSheet1 || []
  const number_of_locations_in_ha_noi = locations.edges.filter(
    item => item.node.city === 'Hanoi City'
  ).length
  const number_of_locations_in_hcm = locations.edges.filter(
    item => item.node.city === 'Hochiminh City'
  ).length

  return (
    <div>
      <p>Một vài thông tin chung của hệ thống</p>
      <ol>
        <li>
          {`Số lượng cửa hàng ở Hà Nội là ${number_of_locations_in_ha_noi}`}
        </li>
        <li>
          {`Số lượng cửa hàng ở Sài Gòn là ${number_of_locations_in_hcm}`}
        </li>
      </ol>
      <Link to="/">Trang chủ</Link>
    </div>
  )
}

export default ThongTinChung

export const ThongTinChungQuery = graphql`
  query ThongTinChungQuery {
    allLocationsXlsxSheet1 {
      edges {
        node {
          id
          city
        }
      }
    }
  }
`
