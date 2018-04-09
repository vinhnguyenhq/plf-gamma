import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const TayHo = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default TayHo

export const TayHoQuery = graphql`
  query TayHoQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Tây Hồ" } }) {
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
