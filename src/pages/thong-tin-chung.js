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
      <ul>
        <li>
          {`Số lượng cửa hàng ở Hà Nội là ${number_of_locations_in_ha_noi}`}
        </li>
        <li>
          {`Số lượng cửa hàng ở Sài Gòn là ${number_of_locations_in_hcm}`}
        </li>
        <li>20 đơn hàng tối đa cho mỗi nhà bán hàng mỗi ngày</li>
        <li>Kích cỡ gói hàng: Tối đa 18 x 18 x 35</li>
        <li>
          Giờ làm việc:
          <ol>
            <li>Ministop: 24/7</li>
            <li>BsMart: 24/7</li>
            <li>FPT: 8:00 - 22:00</li>
            <li>Truemoney: 8:00 - 22:00</li>
          </ol>
        </li>
      </ul>
      <hr />
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
