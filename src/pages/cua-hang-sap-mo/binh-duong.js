import React from 'react'
import Link from 'gatsby-link'
import NoStoreHere from '../../components/NoStoreHere'
import ComingSoonStore from '../../components/ComingSoonStore'

const BinhDuong = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <ComingSoonStore
      nodes={data.allLocationsXlsxSheet1.edges}
      city="Bình Dương"
    />
  ) : (
    <NoStoreHere />
  )
}

export default BinhDuong

export const BinhDuongQuery = graphql`
  query BinhDuongQuery {
    allLocationsXlsxSheet1(
      filter: { city: { regex: "/Binhduong/" }, status: { eq: "Setting" } }
    ) {
      totalCount
      edges {
        node {
          plf_id
          complete_address
          station_name
          longitude
          latitude
          city
          ward
          district
          planned_launch_date
          week
          status
          contact_email
          notes
          partner_type
        }
      }
    }
  }
`
