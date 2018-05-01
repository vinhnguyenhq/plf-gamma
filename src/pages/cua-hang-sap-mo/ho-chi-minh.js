import React from 'react'
import Link from 'gatsby-link'
import NoStoreHere from '../../components/NoStoreHere'
import ComingSoonStore from '../../components/ComingSoonStore'

const HoChiMinh = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <ComingSoonStore
      nodes={data.allLocationsXlsxSheet1.edges}
      city="Hồ Chí Minh"
    />
  ) : (
    <NoStoreHere />
  )
}

export default HoChiMinh

export const HoChiMinhQuery = graphql`
  query HoChiMinhQuery {
    allLocationsXlsxSheet1(
      filter: { city: { regex: "/Hochiminh/" }, status: { eq: "Setting" } }
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
