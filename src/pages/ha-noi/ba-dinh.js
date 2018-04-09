import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const BaDinh = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default BaDinh

export const BaDinhQuery = graphql`
  query BaDinhQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Ba Đình" } }) {
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
