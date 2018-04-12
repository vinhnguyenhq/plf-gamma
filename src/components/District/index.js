import React from 'react'
import Link from 'gatsby-link'
import StoreDetails from '../StoreDetails'

const District = props => {
  return (
    <div className="container">
      <div className="docs-note">
        <p>Danh sách cửa hàng</p>
      </div>
      <div className="columns">
        {props.nodes.map(item => {
          return (
            <div key={item.node.plf_id} className="column col-6 col-xs-12">
              <StoreDetails item={item.node} />
            </div>
          )
        })}
      </div>

      <hr />
      <Link to={'/'}>Trang chủ</Link>
    </div>
  )
}

export default District
