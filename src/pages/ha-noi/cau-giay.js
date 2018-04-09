import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const CauGiay = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default CauGiay

export const CauGiayQuery = graphql`
  query CauGiayQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Cầu Giấy" } }) {
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
