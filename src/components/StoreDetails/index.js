import React from 'react'

const StoreDetails = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h5">{props.item.partner_type}</div>
        <div className="card-subtitle text-gray">
          {props.item.complete_address}
        </div>
      </div>
      <div className="card-body" />
      <div className="card-footer">
        <i className="icon icon-2x icon-location" />
      </div>
    </div>
  )
}

export default StoreDetails
