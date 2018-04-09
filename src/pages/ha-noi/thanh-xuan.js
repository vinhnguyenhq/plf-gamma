import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const ThanhXuan = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default ThanhXuan

export const ThanhXuanQuery = graphql`
  query ThanhXuanQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Thanh Xuân" } }) {
      edges {
        node {
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
        }
      }
    }
  }
`
