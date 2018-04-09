import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const HoangMai = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default HoangMai

export const HoangMaiQuery = graphql`
  query HoangMaiQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Hoàng Mai" } }) {
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
