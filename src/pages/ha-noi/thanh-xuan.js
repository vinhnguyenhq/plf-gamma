import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'
import NoStoreHere from '../../components/NoStoreHere'

const ThanhXuan = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <District nodes={data.allLocationsXlsxSheet1.edges} />
  ) : (
    <NoStoreHere />
  )
}

export default ThanhXuan

export const ThanhXuanQuery = graphql`
  query ThanhXuanQuery {
    allLocationsXlsxSheet1(
      filter: { district: { eq: "Thanh Xuân" }, status: { eq: "Done" } }
    ) {
      edges {
        node { station_name
          plf_id
          complete_address
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
