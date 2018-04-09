import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const HaiBaTrung = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default HaiBaTrung

export const HaiBaTrungQuery = graphql`
  query HaiBaTrungQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Hai Bà Trưng" } }) {
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
