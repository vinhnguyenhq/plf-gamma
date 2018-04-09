import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'

const DongDa = ({ data }) => {
  return <District nodes={data.allLocationsXlsxSheet1.edges} />
}

export default DongDa

export const DongDaQuery = graphql`
  query DongDaQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Đống Đa" } }) {
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
