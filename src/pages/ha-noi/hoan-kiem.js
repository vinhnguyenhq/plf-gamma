import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const HoanKiem = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default HoanKiem

export const HoanKiemQuery = graphql`
  query HoanKiemQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Hoàn Kiếm" } }) {
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
