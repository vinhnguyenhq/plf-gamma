import React from 'react'
import Link from 'gatsby-link'
import District from '../../components/District'
import NoStoreHere from '../../components/NoStoreHere'

const DanPhuong = ({ data }) => {
  const haveData = data.allLocationsXlsxSheet1 ? true : false

  return haveData ? (
    <District nodes={data.allLocationsXlsxSheet1.edges} />
  ) : (
    <NoStoreHere />
  )
}

export default DanPhuong

export const DanPhuongQuery = graphql`
  query DanPhuongQuery {
    allLocationsXlsxSheet1(filter: { district: { eq: "Đan Phượng" } }) {
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
