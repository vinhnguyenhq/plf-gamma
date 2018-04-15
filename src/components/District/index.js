import React from 'react'
import Link from 'gatsby-link'
import StoreDetails from '../StoreDetails'

const createDistrictName = districtName => {
  if (isNaN(districtName)) return districtName
  else return `Quận ${districtName}`
}

const District = props => {
  return (
    <div className="container">
      <h3 className="s-title">
        {createDistrictName(props.nodes[0].node.district)}
      </h3>
      <div className="docs-note">
        <p>
          {`Số cửa hàng trong khu vực thời điểm hiện tại `}{' '}
          <span className="label label-secondary label-rounded">
            {props.nodes.length}
          </span>
        </p>
        <div className="columns">
          {props.nodes.map(item => {
            return (
              <div key={item.node.plf_id} className="column col-6 col-xs-12">
                <StoreDetails item={item.node} />
              </div>
            )
          })}
        </div>
        <div className="divider" />
      </div>
    </div>
  )
}

export default District
