import React from 'react'
import Link from 'gatsby-link'
import NoStoreHere from '../../components/NoStoreHere'
import ComingSoonStore from '../../components/ComingSoonStore'

const HaNoi = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <ComingSoonStore nodes={data.allLocationsXlsxSheet1.edges} city="Hà Nội" />
  ) : (
    <NoStoreHere />
  )
}

export default HaNoi

export const HaNoiQuery = graphql`
  query HaNoiQuery {
    allLocationsXlsxSheet1(
      filter: { city: { regex: "/Hanoi/" }, status: { eq: "Setting" } }
    ) {
      totalCount
      edges {
        node {
          plf_id
          complete_address
          longitude
          station_name
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
