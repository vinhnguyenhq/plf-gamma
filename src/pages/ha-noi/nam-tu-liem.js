import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const NamTuLiem = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default NamTuLiem

export const NamTuLiemQuery = graphql`
  query NamTuLiemQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Nam Từ Liêm" } }) {
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
