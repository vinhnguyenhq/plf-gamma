import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const LongBien = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default LongBien

export const LongBienQuery = graphql`
  query LongBienQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Long Biên" } }) {
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
