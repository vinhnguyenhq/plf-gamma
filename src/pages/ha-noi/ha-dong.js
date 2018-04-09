import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const HaDong = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default HaDong

export const HaDongQuery = graphql`
  query HaDongQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Hà Đông" } }) {
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
