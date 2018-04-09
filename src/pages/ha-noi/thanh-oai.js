import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'
import NoStoreHere from '../../components/NoStoreHere'

const ThanhOai = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <District nodes={data.allLocationsXlsxSheet1.edges} />
  ) : (
    <NoStoreHere />
  )
}

export default ThanhOai

export const ThanhOaiQuery = graphql`
  query ThanhOaiQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Thanh Oai" } }) {
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
