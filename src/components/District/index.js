import React from 'react'
import Link from 'gatsby-link'
import StoreDetails from '../StoreDetails'

const District = props => {
  return (
    <div>
      <p>Danh sách cửa hàng</p>

      <div>
        {props.nodes.map(item => {
          return <StoreDetails key={item.node.plf_id} item={item.node} />
        })}
      </div>

      <hr />
      <Link to={'/'}>Trang chủ</Link>
    </div>
  )
}

export default District
