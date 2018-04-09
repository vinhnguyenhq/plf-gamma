import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'
import NoStoreHere from '../../components/NoStoreHere'

const BaDinh = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <District nodes={data.allLocationsXlsxSheet1.edges} />
  ) : (
    <NoStoreHere />
  )
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
