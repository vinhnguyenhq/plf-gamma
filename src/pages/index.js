import React from 'react'
import Link from 'gatsby-link'
import HomeBackgroundImage from '../imgs/home.jpg'

function formatData(data) {
  let locations = {
    hochiminh: {
      name: 'Hồ Chí Minh',
      count: 0,
    },
    hanoi: {
      name: 'Hà Nội',
      count: 0,
    },
    binhduong: {
      name: 'Bình Dương',
      count: 0,
    },
    dongnai: {
      name: 'Đồng Nai',
      count: 0,
    },
    coming: {
      name: '',
      count: 0,
    },
  }

  if (data.allLocationsXlsxSheet1) {
    const originalLocations = data.allLocationsXlsxSheet1

    const number_of_locations_in_ha_noi = originalLocations.edges.filter(
      item => item.node.city === 'Hanoi City' && item.node.status === 'Done'
    ).length

    const number_of_locations_in_hcm = originalLocations.edges.filter(
      item => item.node.city === 'Hochiminh City' && item.node.status === 'Done'
    ).length

    const number_of_locations_in_binhduong = originalLocations.edges.filter(
      item => item.node.city === 'Binhduong' && item.node.status === 'Done'
    ).length

    const number_of_locations_in_dongnai = originalLocations.edges.filter(
      item => item.node.city === 'Dongnai' && item.node.status === 'Done'
    ).length

    const number_of_opening_soon_locations = originalLocations.edges.filter(
      item => item.node.status === 'Setting'
    ).length

    locations.hochiminh.count = number_of_locations_in_hcm
    locations.hanoi.count = number_of_locations_in_ha_noi
    locations.binhduong.count = number_of_locations_in_binhduong
    locations.dongnai.count = number_of_locations_in_dongnai
    locations.coming.count = number_of_opening_soon_locations
  }

  return locations
}

const IndexPage = ({ data }) => {
  const locations = formatData(data)

  return (
    <div className="container">
      <h3 className="s-title">Hệ Thống nhận hàng Lazada Express Việt Nam</h3>
      <div className="docs-note">
        <ul>
          <li>
            {`Số lượng cửa hàng ở ${locations.hochiminh.name} `}
            <span className="label label-secondary label-rounded">
              {locations.hochiminh.count}
            </span>
          </li>
          <li>
            {`Số lượng cửa hàng ở ${locations.hanoi.name} `}
            <span className="label label-secondary label-rounded">
              {locations.hanoi.count}
            </span>
          </li>
          <li>
            {`Số lượng cửa hàng ở ${locations.binhduong.name} `}
            <span className="label label-secondary label-rounded">
              {locations.binhduong.count}
            </span>
          </li>
          <li>
            {`Số lượng cửa hàng ở ${locations.dongnai.name} `}
            <span className="label label-secondary label-rounded">
              {locations.dongnai.count}
            </span>
          </li>
          <li>
            {`Số lượng cửa hàng sắp hoạt động `}
            <span className="label label-secondary label-rounded">
              {locations.coming.count}
            </span>
          </li>

          <div className="divider" />

          <li>
            Giờ làm việc chung
            <ul>
              <li>
                Ministop{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
              <li>
                TM{' '}
                <span className="label label-secondary label-rounded">
                  9:00 - 19:00
                </span>
              </li>
              <li>
                Shop & Go{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
              <li>
                Coopsmile{' '}
                <span className="label label-secondary label-rounded">
                  7:00 - 21:00
                </span>
              </li>
              <li>
                Circle K{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
              <li>
                7Eleven{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
              <li>
                F88{' '}
                <span className="label label-secondary label-rounded">
                  8:30 - 21:00
                </span>
              </li>
              <li>
                Shop Tre Tho{' '}
                <span className="label label-secondary label-rounded">
                  8:00 - 22:00
                </span>
              </li>
              <li>
                Bibo Mart{' '}
                <span className="label label-secondary label-rounded">
                  9:00 - 21:00
                </span>
              </li>
              <li>
                Viễn Thông A{' '}
                <span className="label label-secondary label-rounded">
                  8:00 - 21:00
                </span>
              </li>
              <li>
                An Tam Pharma{' '}
                <span className="label label-secondary label-rounded">
                  7:00 - 22:00
                </span>
              </li>
              <li>
                Pharmacity{' '}
                <span className="label label-secondary label-rounded">
                  7:00 - 23:30
                </span>
              </li>
              <li>
                BsMart{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
              <li>
                Family Mart{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
            </ul>
          </li>

          <div className="divider" />

          <li>
            Điều kiện nhận hàng
            <ul>
              <li>
                Tối đa{' '}
                <span className="label label-secondary label-rounded">20</span>{' '}
                đơn hàng một ngày
              </li>
              <li>
                Kích cỡ gói hàng tối đa{' '}
                <span className="label label-secondary label-rounded">
                  15 x 15 x 35
                </span>
              </li>
            </ul>
          </li>

          <div className="divider" />
        </ul>
      </div>
    </div>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allLocationsXlsxSheet1 {
      edges {
        node {
          id
          city
          status
        }
      }
    }
  }
`
