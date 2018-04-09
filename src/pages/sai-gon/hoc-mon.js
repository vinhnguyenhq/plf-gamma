import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'
import NoStoreHere from '../../components/NoStoreHere'

const HocMon = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <District nodes={data.allLocationsXlsxSheet1.edges} />
  ) : (
    <NoStoreHere />
  )
}

export default HocMon

export const HocMonQuery = graphql`
  query HocMonQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Hóc Môn" } }) {
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
