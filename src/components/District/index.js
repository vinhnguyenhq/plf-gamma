import React from 'react'
import Link from 'gatsby-link'

const District = props => {
  return (
    <div>
      <p>Danh sách cửa hàng</p>
      <ol>
        {props.nodes.map(item => {
          return <li key={item.node.plf_id}>{item.node.complete_address}</li>
        })}
      </ol>

      <hr />
      <Link to={'/'}>Trang chủ</Link>
    </div>
  )
}

export default District
