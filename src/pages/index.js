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

    const number_of_opening_soon_locations = originalLocations.edges.filter(
      item => item.node.status === 'Setting'
    ).length

    locations.hochiminh.count = number_of_locations_in_hcm
    locations.hanoi.count = number_of_locations_in_ha_noi
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
            {`Số lượng cửa hàng sắp hoạt động `}
            <span className="label label-secondary label-rounded">
              {locations.coming.count}
            </span>
          </li>
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
                BsMart{' '}
                <span className="label label-secondary label-rounded">
                  24/7
                </span>
              </li>
              <li>
                FPT{' '}
                <span className="label label-secondary label-rounded">
                  8:00 - 22:00
                </span>
              </li>
              <li>
                Truemoney{' '}
                <span className="label label-secondary label-rounded">
                  8:00 - 22:00
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
                  18 x 18 x 35
                </span>
              </li>
            </ul>
          </li>
        </ul>

        <div className="spotlight-home-mobile">
          <div className="parallax">
            <div className="parallax-top-left" tabIndex="1" />
            <div className="parallax-top-right" tabIndex="2" />
            <div className="parallax-bottom-left" tabIndex="3" />
            <div className="parallax-bottom-right" tabIndex="4" />
            <div className="parallax-content">
              <div className="parallax-back">
                <img
                  src={HomeBackgroundImage}
                  className="img-responsive rounded"
                />
              </div>
            </div>
          </div>
        </div>
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
